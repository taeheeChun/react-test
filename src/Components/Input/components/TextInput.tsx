import React from 'react';
import { TextInputProps } from '../types';

const TextInput: React.FC<TextInputProps> = ({
    value,
    onChange,
    placeholder,
    maxLength,
    disabled,
    className,
}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            disabled={disabled}
            maxLength={maxLength}
        />
    );
};

export default TextInput; 