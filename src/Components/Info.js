import React, { useState, useEffect} from "react";

// useEffect 훅을 사용하여 컴포넌트가 마운트될 때 콘솔에 메시지를 출력하는 Info 컴포넌트
// 마운트 또는 렌더링 할때 호출 가능
const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 콘솔에 메시지를 출력
    useEffect(() => {
        console.log("컴포넌트가 마운트되었습니다.");
    }, []);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임: </b>
                    {nickname}
                </div>
            </div>
        </div>
    );


};

export default Info;