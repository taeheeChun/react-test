import React, { useState } from "react";

// useState 훅을 사용하여 상태를 관리하는 Counter 컴포넌트
// 컴포넌트 상태를 관리
// 하나의 상태만 관리 하므로 여러개 사용 할려면 여러번 호출
const Counter = () => {
    const [value, setValue] = useState(0); // 배열에 구조 분해 할당

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)}> +1 </button>
            <button onClick={() => setValue(value - 1)}> -1 </button>
        </div>
    )
}

export default Counter;