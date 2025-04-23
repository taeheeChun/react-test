import React, { useReducer } from 'react';

// 여러개의 상태를 관리하는 경우,,
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;
    // e.target 값 자체를 액션 값으로 사용
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;