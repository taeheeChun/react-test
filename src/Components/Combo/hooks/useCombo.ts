import React, { useState } from "react";

interface UseComboProps {
    initialValue?: string;
    initialOptions?: [];
    keyText?: string,
    keyValue?: string,
    onChange?: (value: string) => void;
}

export const useCombo = ({
    initialValue = "",
    initialOptions = [],
    keyText = "text",
    keyValue = "value",
    onChange,
}: UseComboProps) => {
    const [value, setValue] = useState<string>(initialValue);
    const [options, setOptions] = useState<any[]>(initialOptions);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return {
        value,
        options,
        setOptions,
        handleChange,
        keyText,
        keyValue,
    };
};