import React from 'react';
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';
import { InputField } from '.';
import { InputFieldProps } from '../types';

interface FormFieldProps extends Omit<InputFieldProps, 'value' | 'onValueChange'> {
  name: string;
  label?: string;
  rules?: RegisterOptions;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  rules,
  ...inputProps
}) => {
  const { control, formState: { errors } } = useFormContext();
  
  return (
    <div className="form-field">
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <InputField
            value={field.value}
            onValueChange={field.onChange}
            {...inputProps}
          />
        )}
      />
      {errors[name] && (
        <p className="error-message">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};
