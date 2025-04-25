import { ChangeEvent } from 'react';

export type InputType = 'text' | 'number' | 'email' | 'alphanumeric' | 'password' | 'tel';

export interface UseInputProps {
  initialValue?: string;
  maxLength?: number;
  type?: InputType;
}

export interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
}

export interface InputFieldProps extends UseInputProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
} 