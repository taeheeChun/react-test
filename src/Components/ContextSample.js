import React, { createContext, useContext } from "react";

// Context API를 사용하여 전역 상태를 관리하는 예제
// 전역 상태
const ThemeContext = createContext('black'); // 전역 변수

const ContextSample = () => {
    const theme = useContext(ThemeContext); // Context API를 사용하여 전역 상태를 가져옴
    const style = {
        width: '24px',
        height: '24px',
        background: theme,
    };
    return (
        <div style={style}></div>
    )
};

export default ContextSample;