/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { FunctionComponent, useCallback, useEffect, useRef } from 'react';

import { useForm, OnFormUpdateArg, FormData, useKibana } from '../../../../../shared_imports';
import { ProcessorInternal } from '../../types';

import { EditProcessorForm } from './edit_processor_form';
import { AddProcessorForm } from './add_processor_form';

export type ProcessorFormOnSubmitArg = Omit<ProcessorInternal, 'id'>;

export type OnSubmitHandler = (processor: ProcessorFormOnSubmitArg) => void;

export type OnFormUpdateHandler = (form: OnFormUpdateArg<any>) => void;

export interface Fields {
  fields: { [key: string]: any };
}

interface Props {
  onFormUpdate: OnFormUpdateHandler;
  onSubmit: OnSubmitHandler;
  isOnFailure: boolean;
  onOpen: () => void;
  onClose: () => void;
  processor?: ProcessorInternal;
}

export const ProcessorFormContainer: FunctionComponent<Props> = ({
  processor,
  onFormUpdate,
  onSubmit,
  onClose,
  ...rest
}) => {
  const { services } = useKibana();

  // We need to keep track of the processor form state if the user
  // has made config changes, navigated between tabs (Configuration vs. Output)
  // and has not yet submitted the form
  const unsavedFormState = useRef<ProcessorInternal['options'] | undefined>();

  const getProcessor = useCallback((): ProcessorInternal => {
    let options;

    if (unsavedFormState?.current) {
      options = unsavedFormState.current;
    } else {
      options = processor?.options ?? {};
    }

    return { ...processor, options } as ProcessorInternal;
  }, [processor, unsavedFormState]);

  const { form } = useForm({
    defaultValue: { fields: getProcessor().options },
  });
  const { subscribe } = form;

  const handleSubmit = useCallback(
    async (shouldCloseFlyout: boolean = true) => {
      const { isValid, data } = await form.submit();

      if (isValid) {
        const { type, customOptions, fields } = data as FormData;
        const options = customOptions ? customOptions : fields;

        unsavedFormState.current = options;

        onSubmit({
          type,
          options,
        });

        if (shouldCloseFlyout) {
          onClose();
        }
      }
    },
    [form, onClose, onSubmit]
  );

  const resetProcessors = useCallback(() => {
    onSubmit({
      type: processor!.type,
      options: processor?.options || {},
    });
  }, [onSubmit, processor]);

  useEffect(() => {
    const subscription = subscribe(onFormUpdate);
    return subscription.unsubscribe;
  }, [onFormUpdate, subscribe]);

  if (processor) {
    return (
      <EditProcessorForm
        {...rest}
        form={form}
        getProcessor={getProcessor}
        esDocsBasePath={services.documentation.getEsDocsBasePath()}
        closeFlyout={onClose}
        resetProcessors={resetProcessors}
        handleSubmit={handleSubmit}
      />
    );
  }

  return (
    <AddProcessorForm
      {...rest}
      form={form}
      esDocsBasePath={services.documentation.getEsDocsBasePath()}
      closeFlyout={onClose}
      handleSubmit={handleSubmit}
    />
  );
};
