/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export const mockAlertDetailsData = [
  { category: 'process', field: 'process.name', values: ['-'], originalValue: '-' },
  { category: 'process', field: 'process.pid', values: [0], originalValue: 0 },
  { category: 'process', field: 'process.executable', values: ['-'], originalValue: '-' },
  {
    category: 'agent',
    field: 'agent.hostname',
    values: ['windows-native'],
    originalValue: 'windows-native',
  },
  {
    category: 'agent',
    field: 'agent.name',
    values: ['windows-native'],
    originalValue: 'windows-native',
  },
  {
    category: 'agent',
    field: 'agent.id',
    values: ['abfe4a35-d5b4-42a0-a539-bd054c791769'],
    originalValue: 'abfe4a35-d5b4-42a0-a539-bd054c791769',
  },
  { category: 'agent', field: 'agent.type', values: ['winlogbeat'], originalValue: 'winlogbeat' },
  {
    category: 'agent',
    field: 'agent.ephemeral_id',
    values: ['b9850845-c000-4ddd-bd51-9978a07b7e7d'],
    originalValue: 'b9850845-c000-4ddd-bd51-9978a07b7e7d',
  },
  { category: 'agent', field: 'agent.version', values: ['7.10.0'], originalValue: '7.10.0' },
  {
    category: 'winlog',
    field: 'winlog.computer_name',
    values: ['windows-native'],
    originalValue: 'windows-native',
  },
  { category: 'winlog', field: 'winlog.process.pid', values: [624], originalValue: 624 },
  { category: 'winlog', field: 'winlog.process.thread.id', values: [1896], originalValue: 1896 },
  {
    category: 'winlog',
    field: 'winlog.keywords',
    values: ['Audit Failure'],
    originalValue: ['Audit Failure'],
  },
  {
    category: 'winlog',
    field: 'winlog.logon.failure.reason',
    values: ['Unknown user name or bad password.'],
    originalValue: 'Unknown user name or bad password.',
  },
  {
    category: 'winlog',
    field: 'winlog.logon.failure.sub_status',
    values: ['User logon with misspelled or bad password'],
    originalValue: 'User logon with misspelled or bad password',
  },
  {
    category: 'winlog',
    field: 'winlog.logon.failure.status',
    values: ['This is either due to a bad username or authentication information'],
    originalValue: 'This is either due to a bad username or authentication information',
  },
  { category: 'winlog', field: 'winlog.logon.id', values: ['0x0'], originalValue: '0x0' },
  { category: 'winlog', field: 'winlog.logon.type', values: ['Network'], originalValue: 'Network' },
  { category: 'winlog', field: 'winlog.channel', values: ['Security'], originalValue: 'Security' },
  {
    category: 'winlog',
    field: 'winlog.event_data.Status',
    values: ['0xc000006d'],
    originalValue: '0xc000006d',
  },
  { category: 'winlog', field: 'winlog.event_data.LogonType', values: ['3'], originalValue: '3' },
  {
    category: 'winlog',
    field: 'winlog.event_data.SubjectLogonId',
    values: ['0x0'],
    originalValue: '0x0',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.TransmittedServices',
    values: ['-'],
    originalValue: '-',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.LmPackageName',
    values: ['-'],
    originalValue: '-',
  },
  { category: 'winlog', field: 'winlog.event_data.KeyLength', values: ['0'], originalValue: '0' },
  {
    category: 'winlog',
    field: 'winlog.event_data.SubjectUserName',
    values: ['-'],
    originalValue: '-',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.FailureReason',
    values: ['%%2313'],
    originalValue: '%%2313',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.SubjectDomainName',
    values: ['-'],
    originalValue: '-',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.TargetUserName',
    values: ['administrator'],
    originalValue: 'administrator',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.SubStatus',
    values: ['0xc000006a'],
    originalValue: '0xc000006a',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.LogonProcessName',
    values: ['NtLmSsp '],
    originalValue: 'NtLmSsp ',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.SubjectUserSid',
    values: ['S-1-0-0'],
    originalValue: 'S-1-0-0',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.AuthenticationPackageName',
    values: ['NTLM'],
    originalValue: 'NTLM',
  },
  {
    category: 'winlog',
    field: 'winlog.event_data.TargetUserSid',
    values: ['S-1-0-0'],
    originalValue: 'S-1-0-0',
  },
  { category: 'winlog', field: 'winlog.opcode', values: ['Info'], originalValue: 'Info' },
  { category: 'winlog', field: 'winlog.record_id', values: [890770], originalValue: 890770 },
  { category: 'winlog', field: 'winlog.task', values: ['Logon'], originalValue: 'Logon' },
  { category: 'winlog', field: 'winlog.event_id', values: [4625], originalValue: 4625 },
  {
    category: 'winlog',
    field: 'winlog.provider_guid',
    values: ['{54849625-5478-4994-a5ba-3e3b0328c30d}'],
    originalValue: '{54849625-5478-4994-a5ba-3e3b0328c30d}',
  },
  {
    category: 'winlog',
    field: 'winlog.activity_id',
    values: ['{e148a943-f9c4-0001-5a39-81b88bbed601}'],
    originalValue: '{e148a943-f9c4-0001-5a39-81b88bbed601}',
  },
  {
    category: 'winlog',
    field: 'winlog.api',
    values: ['wineventlog'],
    originalValue: 'wineventlog',
  },
  {
    category: 'winlog',
    field: 'winlog.provider_name',
    values: ['Microsoft-Windows-Security-Auditing'],
    originalValue: 'Microsoft-Windows-Security-Auditing',
  },
  { category: 'log', field: 'log.level', values: ['information'], originalValue: 'information' },
  { category: 'source', field: 'source.port', values: [0], originalValue: 0 },
  { category: 'source', field: 'source.domain', values: ['-'], originalValue: '-' },
  {
    category: 'source',
    field: 'source.ip',
    values: ['185.156.74.3'],
    originalValue: '185.156.74.3',
  },
  {
    category: 'base',
    field: 'message',
    values: [
      'An account failed to log on.\n\nSubject:\n\tSecurity ID:\t\tS-1-0-0\n\tAccount Name:\t\t-\n\tAccount Domain:\t\t-\n\tLogon ID:\t\t0x0\n\nLogon Type:\t\t\t3\n\nAccount For Which Logon Failed:\n\tSecurity ID:\t\tS-1-0-0\n\tAccount Name:\t\tadministrator\n\tAccount Domain:\t\t\n\nFailure Information:\n\tFailure Reason:\t\tUnknown user name or bad password.\n\tStatus:\t\t\t0xC000006D\n\tSub Status:\t\t0xC000006A\n\nProcess Information:\n\tCaller Process ID:\t0x0\n\tCaller Process Name:\t-\n\nNetwork Information:\n\tWorkstation Name:\t-\n\tSource Network Address:\t185.156.74.3\n\tSource Port:\t\t0\n\nDetailed Authentication Information:\n\tLogon Process:\t\tNtLmSsp \n\tAuthentication Package:\tNTLM\n\tTransited Services:\t-\n\tPackage Name (NTLM only):\t-\n\tKey Length:\t\t0\n\nThis event is generated when a logon request fails. It is generated on the computer where access was attempted.\n\nThe Subject fields indicate the account on the local system which requested the logon. This is most commonly a service such as the Server service, or a local process such as Winlogon.exe or Services.exe.\n\nThe Logon Type field indicates the kind of logon that was requested. The most common types are 2 (interactive) and 3 (network).\n\nThe Process Information fields indicate which account and process on the system requested the logon.\n\nThe Network Information fields indicate where a remote logon request originated. Workstation name is not always available and may be left blank in some cases.\n\nThe authentication information fields provide detailed information about this specific logon request.\n\t- Transited services indicate which intermediate services have participated in this logon request.\n\t- Package name indicates which sub-protocol was used among the NTLM protocols.\n\t- Key length indicates the length of the generated session key. This will be 0 if no session key was requested.',
    ],
    originalValue:
      'An account failed to log on.\n\nSubject:\n\tSecurity ID:\t\tS-1-0-0\n\tAccount Name:\t\t-\n\tAccount Domain:\t\t-\n\tLogon ID:\t\t0x0\n\nLogon Type:\t\t\t3\n\nAccount For Which Logon Failed:\n\tSecurity ID:\t\tS-1-0-0\n\tAccount Name:\t\tadministrator\n\tAccount Domain:\t\t\n\nFailure Information:\n\tFailure Reason:\t\tUnknown user name or bad password.\n\tStatus:\t\t\t0xC000006D\n\tSub Status:\t\t0xC000006A\n\nProcess Information:\n\tCaller Process ID:\t0x0\n\tCaller Process Name:\t-\n\nNetwork Information:\n\tWorkstation Name:\t-\n\tSource Network Address:\t185.156.74.3\n\tSource Port:\t\t0\n\nDetailed Authentication Information:\n\tLogon Process:\t\tNtLmSsp \n\tAuthentication Package:\tNTLM\n\tTransited Services:\t-\n\tPackage Name (NTLM only):\t-\n\tKey Length:\t\t0\n\nThis event is generated when a logon request fails. It is generated on the computer where access was attempted.\n\nThe Subject fields indicate the account on the local system which requested the logon. This is most commonly a service such as the Server service, or a local process such as Winlogon.exe or Services.exe.\n\nThe Logon Type field indicates the kind of logon that was requested. The most common types are 2 (interactive) and 3 (network).\n\nThe Process Information fields indicate which account and process on the system requested the logon.\n\nThe Network Information fields indicate where a remote logon request originated. Workstation name is not always available and may be left blank in some cases.\n\nThe authentication information fields provide detailed information about this specific logon request.\n\t- Transited services indicate which intermediate services have participated in this logon request.\n\t- Package name indicates which sub-protocol was used among the NTLM protocols.\n\t- Key length indicates the length of the generated session key. This will be 0 if no session key was requested.',
  },
  {
    category: 'cloud',
    field: 'cloud.availability_zone',
    values: ['us-central1-a'],
    originalValue: 'us-central1-a',
  },
  {
    category: 'cloud',
    field: 'cloud.instance.name',
    values: ['windows-native'],
    originalValue: 'windows-native',
  },
  {
    category: 'cloud',
    field: 'cloud.instance.id',
    values: ['5896613765949631815'],
    originalValue: '5896613765949631815',
  },
  { category: 'cloud', field: 'cloud.provider', values: ['gcp'], originalValue: 'gcp' },
  {
    category: 'cloud',
    field: 'cloud.machine.type',
    values: ['e2-medium'],
    originalValue: 'e2-medium',
  },
  {
    category: 'cloud',
    field: 'cloud.project.id',
    values: ['elastic-siem'],
    originalValue: 'elastic-siem',
  },
  {
    category: 'base',
    field: '@timestamp',
    values: ['2020-11-25T15:42:39.417Z'],
    originalValue: '2020-11-25T15:42:39.417Z',
  },
  {
    category: 'related',
    field: 'related.user',
    values: ['administrator'],
    originalValue: 'administrator',
  },
  { category: 'ecs', field: 'ecs.version', values: ['1.5.0'], originalValue: '1.5.0' },
  {
    category: 'host',
    field: 'host.hostname',
    values: ['windows-native'],
    originalValue: 'windows-native',
  },
  { category: 'host', field: 'host.os.build', values: ['17763.1577'], originalValue: '17763.1577' },
  {
    category: 'host',
    field: 'host.os.kernel',
    values: ['10.0.17763.1577 (WinBuild.160101.0800)'],
    originalValue: '10.0.17763.1577 (WinBuild.160101.0800)',
  },
  {
    category: 'host',
    field: 'host.os.name',
    values: ['Windows Server 2019 Datacenter'],
    originalValue: 'Windows Server 2019 Datacenter',
  },
  { category: 'host', field: 'host.os.family', values: ['windows'], originalValue: 'windows' },
  { category: 'host', field: 'host.os.version', values: ['10.0'], originalValue: '10.0' },
  { category: 'host', field: 'host.os.platform', values: ['windows'], originalValue: 'windows' },
  {
    category: 'host',
    field: 'host.ip',
    values: ['fe80::406c:d205:5b46:767f', '10.128.15.228'],
    originalValue: ['fe80::406c:d205:5b46:767f', '10.128.15.228'],
  },
  {
    category: 'host',
    field: 'host.name',
    values: ['windows-native'],
    originalValue: 'windows-native',
  },
  {
    category: 'host',
    field: 'host.id',
    values: ['08f50e68-847a-4fae-a8eb-c7dc886447bb'],
    originalValue: '08f50e68-847a-4fae-a8eb-c7dc886447bb',
  },
  {
    category: 'host',
    field: 'host.mac',
    values: ['42:01:0a:80:0f:e4'],
    originalValue: ['42:01:0a:80:0f:e4'],
  },
  { category: 'host', field: 'host.architecture', values: ['x86_64'], originalValue: 'x86_64' },
  {
    category: 'event',
    field: 'event.ingested',
    values: ['2020-11-25T15:36:40.924914552Z'],
    originalValue: '2020-11-25T15:36:40.924914552Z',
  },
  { category: 'event', field: 'event.code', values: [4625], originalValue: 4625 },
  { category: 'event', field: 'event.lag.total', values: [2077], originalValue: 2077 },
  { category: 'event', field: 'event.lag.read', values: [1075], originalValue: 1075 },
  { category: 'event', field: 'event.lag.ingest', values: [1002], originalValue: 1002 },
  {
    category: 'event',
    field: 'event.provider',
    values: ['Microsoft-Windows-Security-Auditing'],
    originalValue: 'Microsoft-Windows-Security-Auditing',
  },
  {
    category: 'event',
    field: 'event.created',
    values: ['2020-11-25T15:36:39.922Z'],
    originalValue: '2020-11-25T15:36:39.922Z',
  },
  { category: 'event', field: 'event.kind', values: ['signal'], originalValue: 'signal' },
  { category: 'event', field: 'event.module', values: ['security'], originalValue: 'security' },
  {
    category: 'event',
    field: 'event.action',
    values: ['logon-failed'],
    originalValue: 'logon-failed',
  },
  { category: 'event', field: 'event.type', values: ['start'], originalValue: 'start' },
  {
    category: 'event',
    field: 'event.category',
    values: ['authentication'],
    originalValue: 'authentication',
  },
  { category: 'event', field: 'event.outcome', values: ['failure'], originalValue: 'failure' },
  {
    category: 'user',
    field: 'user.name',
    values: ['administrator'],
    originalValue: 'administrator',
  },
  { category: 'user', field: 'user.id', values: ['S-1-0-0'], originalValue: 'S-1-0-0' },
  {
    category: 'signal',
    field: 'signal.parents',
    values: [
      '{"id":"688MAHYB7WTwW_Glsi_d","type":"event","index":"winlogbeat-7.10.0-2020.11.12-000001","depth":0}',
    ],
    originalValue: [
      {
        id: '688MAHYB7WTwW_Glsi_d',
        type: 'event',
        index: 'winlogbeat-7.10.0-2020.11.12-000001',
        depth: 0,
      },
    ],
  },
  {
    category: 'signal',
    field: 'signal.ancestors',
    values: [
      '{"id":"688MAHYB7WTwW_Glsi_d","type":"event","index":"winlogbeat-7.10.0-2020.11.12-000001","depth":0}',
    ],
    originalValue: [
      {
        id: '688MAHYB7WTwW_Glsi_d',
        type: 'event',
        index: 'winlogbeat-7.10.0-2020.11.12-000001',
        depth: 0,
      },
    ],
  },
  { category: 'signal', field: 'signal.status', values: ['open'], originalValue: 'open' },
  {
    category: 'signal',
    field: 'signal.rule.id',
    values: ['b69d086c-325a-4f46-b17b-fb6d227006ba'],
    originalValue: 'b69d086c-325a-4f46-b17b-fb6d227006ba',
  },
  {
    category: 'signal',
    field: 'signal.rule.rule_id',
    values: ['e7cd9a53-ac62-44b5-bdec-9c94d85bb1a5'],
    originalValue: 'e7cd9a53-ac62-44b5-bdec-9c94d85bb1a5',
  },
  { category: 'signal', field: 'signal.rule.actions', values: [], originalValue: [] },
  { category: 'signal', field: 'signal.rule.author', values: [], originalValue: [] },
  { category: 'signal', field: 'signal.rule.false_positives', values: [], originalValue: [] },
  { category: 'signal', field: 'signal.rule.meta.from', values: ['1m'], originalValue: '1m' },
  {
    category: 'signal',
    field: 'signal.rule.meta.kibana_siem_app_url',
    values: ['http://localhost:5601/app/security'],
    originalValue: 'http://localhost:5601/app/security',
  },
  { category: 'signal', field: 'signal.rule.max_signals', values: [100], originalValue: 100 },
  { category: 'signal', field: 'signal.rule.risk_score', values: [21], originalValue: 21 },
  { category: 'signal', field: 'signal.rule.risk_score_mapping', values: [], originalValue: [] },
  {
    category: 'signal',
    field: 'signal.rule.output_index',
    values: ['.siem-signals-angelachuang-default'],
    originalValue: '.siem-signals-angelachuang-default',
  },
  { category: 'signal', field: 'signal.rule.description', values: ['xxx'], originalValue: 'xxx' },
  {
    category: 'signal',
    field: 'signal.rule.from',
    values: ['now-360s'],
    originalValue: 'now-360s',
  },
  {
    category: 'signal',
    field: 'signal.rule.index',
    values: [
      'apm-*-transaction*',
      'traces-apm*',
      'auditbeat-*',
      'endgame-*',
      'filebeat-*',
      'logs-*',
      'packetbeat-*',
      'winlogbeat-*',
    ],
    originalValue: [
      'apm-*-transaction*',
      'traces-apm*',
      'auditbeat-*',
      'endgame-*',
      'filebeat-*',
      'logs-*',
      'packetbeat-*',
      'winlogbeat-*',
    ],
  },
  { category: 'signal', field: 'signal.rule.interval', values: ['5m'], originalValue: '5m' },
  { category: 'signal', field: 'signal.rule.language', values: ['kuery'], originalValue: 'kuery' },
  { category: 'signal', field: 'signal.rule.license', values: [''], originalValue: '' },
  { category: 'signal', field: 'signal.rule.name', values: ['xxx'], originalValue: 'xxx' },
  {
    category: 'signal',
    field: 'signal.rule.query',
    values: ['@timestamp : * '],
    originalValue: '@timestamp : * ',
  },
  { category: 'signal', field: 'signal.rule.references', values: [], originalValue: [] },
  { category: 'signal', field: 'signal.rule.severity', values: ['low'], originalValue: 'low' },
  { category: 'signal', field: 'signal.rule.severity_mapping', values: [], originalValue: [] },
  { category: 'signal', field: 'signal.rule.tags', values: [], originalValue: [] },
  { category: 'signal', field: 'signal.rule.type', values: ['query'], originalValue: 'query' },
  { category: 'signal', field: 'signal.rule.to', values: ['now'], originalValue: 'now' },
  {
    category: 'signal',
    field: 'signal.rule.filters',
    values: [
      '{"meta":{"alias":null,"negate":false,"disabled":false,"type":"exists","key":"message","value":"exists"},"exists":{"field":"message"},"$state":{"store":"appState"}}',
    ],
    originalValue: [
      {
        meta: {
          alias: null,
          negate: false,
          disabled: false,
          type: 'exists',
          key: 'message',
          value: 'exists',
        },
        exists: { field: 'message' },
        $state: { store: 'appState' },
      },
    ],
  },
  {
    category: 'signal',
    field: 'signal.rule.created_by',
    values: ['angela'],
    originalValue: 'angela',
  },
  {
    category: 'signal',
    field: 'signal.rule.updated_by',
    values: ['angela'],
    originalValue: 'angela',
  },
  { category: 'signal', field: 'signal.rule.threat', values: [], originalValue: [] },
  { category: 'signal', field: 'signal.rule.version', values: [2], originalValue: 2 },
  {
    category: 'signal',
    field: 'signal.rule.created_at',
    values: ['2020-11-24T10:30:33.660Z'],
    originalValue: '2020-11-24T10:30:33.660Z',
  },
  {
    category: 'signal',
    field: 'signal.rule.updated_at',
    values: ['2020-11-25T15:37:40.939Z'],
    originalValue: '2020-11-25T15:37:40.939Z',
  },
  { category: 'signal', field: 'signal.rule.exceptions_list', values: [], originalValue: [] },
  { category: 'signal', field: 'signal.depth', values: [1], originalValue: 1 },
  {
    category: 'signal',
    field: 'signal.parent.id',
    values: ['688MAHYB7WTwW_Glsi_d'],
    originalValue: '688MAHYB7WTwW_Glsi_d',
  },
  { category: 'signal', field: 'signal.parent.type', values: ['event'], originalValue: 'event' },
  {
    category: 'signal',
    field: 'signal.parent.index',
    values: ['winlogbeat-7.10.0-2020.11.12-000001'],
    originalValue: 'winlogbeat-7.10.0-2020.11.12-000001',
  },
  { category: 'signal', field: 'signal.parent.depth', values: [0], originalValue: 0 },
  {
    category: 'signal',
    field: 'signal.original_time',
    values: ['2020-11-25T15:36:38.847Z'],
    originalValue: '2020-11-25T15:36:38.847Z',
  },
  {
    category: 'signal',
    field: 'signal.original_event.ingested',
    values: ['2020-11-25T15:36:40.924914552Z'],
    originalValue: '2020-11-25T15:36:40.924914552Z',
  },
  { category: 'signal', field: 'signal.original_event.code', values: [4625], originalValue: 4625 },
  {
    category: 'signal',
    field: 'signal.original_event.lag.total',
    values: [2077],
    originalValue: 2077,
  },
  {
    category: 'signal',
    field: 'signal.original_event.lag.read',
    values: [1075],
    originalValue: 1075,
  },
  {
    category: 'signal',
    field: 'signal.original_event.lag.ingest',
    values: [1002],
    originalValue: 1002,
  },
  {
    category: 'signal',
    field: 'signal.original_event.provider',
    values: ['Microsoft-Windows-Security-Auditing'],
    originalValue: 'Microsoft-Windows-Security-Auditing',
  },
  {
    category: 'signal',
    field: 'signal.original_event.created',
    values: ['2020-11-25T15:36:39.922Z'],
    originalValue: '2020-11-25T15:36:39.922Z',
  },
  {
    category: 'signal',
    field: 'signal.original_event.kind',
    values: ['event'],
    originalValue: 'event',
  },
  {
    category: 'signal',
    field: 'signal.original_event.module',
    values: ['security'],
    originalValue: 'security',
  },
  {
    category: 'signal',
    field: 'signal.original_event.action',
    values: ['logon-failed'],
    originalValue: 'logon-failed',
  },
  {
    category: 'signal',
    field: 'signal.original_event.type',
    values: ['start'],
    originalValue: 'start',
  },
  {
    category: 'signal',
    field: 'signal.original_event.category',
    values: ['authentication'],
    originalValue: 'authentication',
  },
  {
    category: 'signal',
    field: 'signal.original_event.outcome',
    values: ['failure'],
    originalValue: 'failure',
  },
  {
    category: '_index',
    field: '_index',
    values: ['.siem-signals-angelachuang-default-000004'],
    originalValue: '.siem-signals-angelachuang-default-000004',
  },
  {
    category: '_id',
    field: '_id',
    values: ['5d1d53da502f56aacc14c3cb5c669363d102b31f99822e5d369d4804ed370a31'],
    originalValue: '5d1d53da502f56aacc14c3cb5c669363d102b31f99822e5d369d4804ed370a31',
  },
  { category: '_score', field: '_score', values: [1], originalValue: 1 },
  {
    category: 'fields',
    field: 'fields.agent.name',
    values: ['windows-native'],
    originalValue: ['windows-native'],
  },
  {
    category: 'fields',
    field: 'fields.cloud.machine.type',
    values: ['e2-medium'],
    originalValue: ['e2-medium'],
  },
  { category: 'fields', field: 'fields.cloud.provider', values: ['gcp'], originalValue: ['gcp'] },
  {
    category: 'fields',
    field: 'fields.agent.id',
    values: ['abfe4a35-d5b4-42a0-a539-bd054c791769'],
    originalValue: ['abfe4a35-d5b4-42a0-a539-bd054c791769'],
  },
  {
    category: 'fields',
    field: 'fields.cloud.instance.id',
    values: ['5896613765949631815'],
    originalValue: ['5896613765949631815'],
  },
  {
    category: 'fields',
    field: 'fields.agent.type',
    values: ['winlogbeat'],
    originalValue: ['winlogbeat'],
  },
  {
    category: 'fields',
    field: 'fields.@timestamp',
    values: ['2020-11-25T15:42:39.417Z'],
    originalValue: ['2020-11-25T15:42:39.417Z'],
  },
  {
    category: 'fields',
    field: 'fields.agent.ephemeral_id',
    values: ['b9850845-c000-4ddd-bd51-9978a07b7e7d'],
    originalValue: ['b9850845-c000-4ddd-bd51-9978a07b7e7d'],
  },
  {
    category: 'fields',
    field: 'fields.cloud.instance.name',
    values: ['windows-native'],
    originalValue: ['windows-native'],
  },
  {
    category: 'fields',
    field: 'fields.cloud.availability_zone',
    values: ['us-central1-a'],
    originalValue: ['us-central1-a'],
  },
  {
    category: 'fields',
    field: 'fields.agent.version',
    values: ['7.10.0'],
    originalValue: ['7.10.0'],
  },
  {
    category: 'threat',
    field: 'threat.enrichments',
    values: [`{"indicator":{"first_seen":"2021-03-25T18:17:00.000Z"}}`],
    originalValue: [`{"indicator":{"first_seen":"2021-03-25T18:17:00.000Z"}}`],
  },
  {
    category: 'threat',
    field: 'threat.enrichments.matched.field',
    values: ['host.name'],
    originalValue: ['host.name'],
  },
];
