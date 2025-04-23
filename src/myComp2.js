import React, { useState } from 'react';

// 함수형 컴포넌트 처리 방식
function MyFunctionalComponent() {
    const [message, setMessage] = useState('Hello, World!');

    return (
        <div>
            {message}
        </div>
    )
}

export default MyFunctionalComponent;