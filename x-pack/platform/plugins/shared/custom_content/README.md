# custom_content

A Kibana dashboard embeddable that renders AI-generated or hand-authored HTML panels, optionally backed by a live ES|QL query.

> **Technical preview** — custom panels are in technical preview and may change or be removed in a future release.

## Overview

A `custom_content` panel stores two pieces of state (both optional) alongside the standard panel titles:

| Field | Type | Purpose |
|-------|------|---------|
| `esqlQuery` | `string \| undefined` | Optional ES\|QL query whose results are injected into the template at render time |
| `template` | `string \| undefined` | LiquidJS HTML template — the actual rendered content |

Panels are saved as part of the dashboard's serialized state (standard embeddable contract, `server/embeddable/schemas.ts`). No separate saved object is created. Both `template` and `esqlQuery` participate in unsaved-change detection.

The template is the source of truth for what renders. It is either generated server-side (agent builder, or "Generate with chat" from the flyout) or hand-authored in the flyout's editor. Nothing is regenerated at render time.

### Shared packages

| Package | Contents |
|---------|----------|
| `@kbn/custom-content-common` | Constants (embeddable type, size limits, CSP meta), the zod state schema, `stripMarkdownFences` |
| `@kbn/custom-content-server` | `createCustomContentTemplateResolver` (the LLM template generator) and `sanitizeCellValue` |
| `@kbn/agent-builder-visualizations-server` | `buildCustomContentConfig` — wraps the resolver with grounded ES|QL generation, validation, and result sampling; backs every generation path |

The custom-content packages are separate from `agent_builder_dashboards` because this plugin and the shared visualization pipeline consume the same code.

## Entry points

### Add panel menu

`getAddCustomContentAction` registers a **Custom** entry in the dashboard "Add panel" menu (`ADD_PANEL_TRIGGER`, visualization group). It adds an empty panel and immediately opens the edit flyout with `isNewPanel: true`. If the flyout closes without saving, the placeholder panel is removed again — unless the user left via "Generate with chat", which retains the panel so the chat can fill it in.

An empty panel renders `CustomContentEmptyPrompt` ("Create your custom panel") with a "Generate with chat" call to action when agent builder is available.

### Agent builder chat

See [Agent builder integration](#agent-builder-integration) below.

## Rendering paths

`use_custom_content_html.ts` picks one of these on every render cycle:

```
no template
  └─ render the empty prompt

template only (no query)
  └─ sanitize + inject theme CSS → render immediately, no network call

template + esqlQuery
  └─ fetchEsqlData(query, timeRange, { filters, query, isApproximate, projectRouting })
     └─ fillTemplate(template, columns, rows) → LiquidJS render → sanitize → display
```

All paths bypass the LLM entirely at render time. Template generation happens once at creation or edit time, not on every render.

The resulting HTML is rendered in an `<iframe sandbox="" srcDoc={...}>`. "Run Preview" from the flyout pushes HTML through a separate `previewHtml$` subject that takes precedence over the saved template, so users can see a draft without saving it; it is cleared when the flyout closes or when a non-reload fetch arrives.

### Unified search

The embeddable subscribes to `fetch$` and republishes `timeRange`, `query`, `filters`, `isApproximate`, and `projectRouting` so ES|QL results respect the dashboard's time picker, KQL bar, filter pills, and approximation setting. It also publishes:

- `usesEsql$` — whether the panel currently has a query.
- `dataViews$` — an ad-hoc data view derived from the ES|QL query (`getESQLAdHocDataview`), which is what gives the KQL bar and filter builder field suggestions for this panel.

### Theming

Theme CSS custom properties are injected client-side from `useEuiTheme()` (`buildThemeCss` in `prepare_html.ts`), so dark mode works correctly including when `theme: darkMode` is `'system'`. Changing the theme updates the CSS without re-fetching ES|QL data.

Available variables: `--cc-color-text`, `--cc-color-background`, `--cc-color-surface`, `--cc-color-primary`, `--cc-color-accent`, `--cc-color-accent-2`, `--cc-color-warning`, `--cc-color-danger`, `--cc-color-border`. The generation prompt instructs the LLM to use these rather than hard-coded colors.

## Template syntax

Templates use [LiquidJS](https://liquidjs.com/) syntax. `fill_template.ts` exposes two variables:

- `rows` — array of row objects, keyed by exact column name. Each column resolves to an object with `.value` (raw cell value) and `.pct` (the value as 0–100 percent of that column's max across all rows; numeric columns only, useful for bar widths).
- `max` — object of per-column maximums, keyed by exact column name.

```html
{% if rows.size == 0 %}<p>No data</p>{% endif %}
{% for row in rows %}
  <span>{{ row["category"].value }}</span>
  <div style="width: {{ row["revenue"].pct }}%"></div>
{% endfor %}
```

Aggregation and sorting are not available in the template — it receives `rows` as the ES|QL query returned them, so grouping belongs in `STATS ... BY ...` upstream.

JavaScript is explicitly blocked — the iframe sandbox, a strict CSP, and `DOMPurify` all independently prevent script execution.

## Edit flyout

Opening the panel context menu → Edit renders `EditCustomContentFlyout`, which lets users:

- Edit the LiquidJS template directly in a Monaco editor (`liquid` language mode), with a copy-to-clipboard button and a vertically resizable editor pane
- Add or change the ES|QL query, with a live data preview (`EsqlPreviewSection`)
- Hand off to the AI chat sidebar with the current draft attached — labelled "Refine with chat" when a template already exists and "Generate with chat" when the editor is empty, and shown only when `agentBuilder` is available

"Run Preview" renders the current draft into the panel without saving, and is enabled only while there are unpreviewed changes. "Apply and close" is enabled only when the template or the query has changed from the saved state.

## Agent builder integration

When `agentBuilder` is available (optional plugin dependency), the panel participates in two ways.

### 1. Refine an existing panel via chat

"Refine with chat" pushes the panel as a unified `visualization` attachment (`renderer: "custom_content"`) with a deterministic id, `visualization-<embeddableId>` (`public/utils/chat_integration.ts`), and opens the chat sidebar. The attachment carries the current template (possibly empty for a brand-new panel), the backing ES|QL query, and the panel title; the session is scoped per panel via a `custom_content-<embeddableId>` tag so concurrent panels don't share chat context.

The agent edits the attachment with the shared `create_visualization` tool, passing the attachment id (the tool is surfaced automatically whenever a visualization attachment is in the conversation). Edits keep the `custom_content` renderer and preserve the panel title, and the tool records the change with `actor: agent`.

The embeddable subscribes to `RoundCompleteEvent`; when a round contains an agent-authored create/update of its own deterministic attachment id, it applies the new template and query to the panel and re-pushes the snapshot so the next round sees the current state.

### 2. Agent-driven dashboard creation and editing

`agent_builder_dashboards` creates and edits custom content panels through its unified `vis` panel type (`renderer: "custom_content"`, `source: "request"`). The agent supplies only a natural-language `query` — the server generates both the ES|QL query and the template.

### The shared generation pipeline

`buildCustomContentConfig` (`@kbn/agent-builder-visualizations-server`) backs the `create_visualization` tool and the dashboard generation tool. In data mode it resolves the backing ES|QL query through the shared visualization pipeline (grounded index discovery, validation, time-picker params), samples 3 rows so the template is authored against the real result schema, and fails the call — never silently degrading — when the query cannot be generated or executed. Static content must be requested explicitly (`contentMode: 'static'`).

The underlying `createCustomContentTemplateResolver` (`@kbn/custom-content-server`) picks one of two system prompts:

- **Static HTML** — no query involved; produces a self-contained HTML document.
- **Liquid template** — a query sample is provided; produces a reusable template with no literal data baked in.

When an existing template is provided it asks the LLM to refine it in place, preserving layout and colors. Output is stripped of markdown fences and validated before it is returned.

## Security

Templates are rendered inside a sandboxed `<iframe sandbox="">` with a strict CSP meta tag (`default-src 'none'; style-src 'unsafe-inline'`). JavaScript cannot execute inside a rendered panel regardless of template content, and the CSP blocks all outbound network requests, so external scripts, fonts, and images cannot load either. `DOMPurify` sanitizes the HTML before injection as an additional layer and strips `<a>` tags.

LLM-generated templates are validated server-side before storage — any output matching `CUSTOM_CONTENT_SCRIPT_PATTERN` or exceeding `CUSTOM_CONTENT_MAX_TEMPLATE_BYTES` is rejected. Prompt, query, and template lengths are bounded by the schemas in `@kbn/custom-content-common`, and the LiquidJS renderer is configured with render, parse, and memory limits.
