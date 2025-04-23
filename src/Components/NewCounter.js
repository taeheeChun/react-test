import React, {useReducer} from "react";

function reducer(state, action) {
    // action.type 에 따른 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            // 아무것도 해당되지 않을 때 기존 상태 반환
            return state;
    }
}

const Counter = () => {
    // reducer 훅을 사용하여 상태 관리
    // useReducer(reducer 함수, 초기값)
    // 받아 올 때, state 와 dispatch 를 구조 분해 할당
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.count}</b> 입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}> +1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}> -1</button>
        </div>
    )

}

export default Counter;