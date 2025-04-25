import { useState, ChangeEvent } from "react";
import { UseInputProps } from '../types';

export const useInput = ({ maxLength, type = 'text', initialValue = '' }: UseInputProps = {}) => {
    const [value, setValue] = useState<string>(initialValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newValue = event.target.value;

        if (maxLength && newValue.length > maxLength) {
            newValue = newValue.slice(0, maxLength);
        }

        // 타입별 유효성 검사
        switch (type) {
            case 'number':
                if (!/^\d*$/.test(newValue)) {
                    return;
                }
                break;
            case 'email':
                // 이메일 입력 중에는 완전한 형식이 아니어도 입력 허용
                // 최종 검증은 onBlur 등에서 처리하는 것이 좋음
                if (newValue && newValue.includes('@') && !/\S+@\S+/.test(newValue)) {
                    return;
                }
                break;
            case 'alphanumeric':
                if (!/^[a-zA-Z0-9]*$/.test(newValue)) {
                    return;
                }
                break;
            case 'password':
                // 비밀번호는 기본적으로 모든 문자 허용
                break;
            case 'tel':
                // 전화번호는 숫자와 특수문자(예: -, (, ))만 허용
                if (!/^[0-9-() ]*$/.test(newValue)) {
                    return;
                }
                break;
            default:
                break;
        }

        setValue(newValue);
    };

    return {
        value,
        onChange: handleChange,
        setValue,
        inputProps: {
            value,
            onChange: handleChange,
        }
    };
};