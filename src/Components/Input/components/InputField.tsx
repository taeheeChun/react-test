import React, { useEffect } from 'react';
import TextInput from './TextInput';
import { useInput } from '../hooks';
import { InputFieldProps } from '../types';

const InputField: React.FC<InputFieldProps> = ({
  value: externalValue,
  onValueChange,
  placeholder,
  className,
  disabled,
  maxLength,
  type,
  initialValue,
}) => {
  // 내부 상태 관리를 위한 훅
  const input = useInput({
    initialValue: externalValue !== undefined ? externalValue : initialValue,
    maxLength,
    type,
  });
  
  // 외부 값이 변경되면 내부 상태 업데이트 (외부 → 내부)
  useEffect(() => {
    if (externalValue !== undefined && externalValue !== input.value) {
      input.setValue(externalValue);
    }
  }, [externalValue]);
  
  // 내부 값이 변경되면 외부에 알림 (내부 → 외부)
  useEffect(() => {
    if (onValueChange && externalValue !== input.value) {
      onValueChange(input.value);
    }
  }, [input.value, onValueChange]);
  
  return (
    <TextInput
      value={input.value}
      onChange={input.onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      maxLength={maxLength}
    />
  );
};

export default InputField; 