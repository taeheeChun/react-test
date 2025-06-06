import React, {useCallback, useMemo, useState, useRef} from "react";
// 이벤트 핸들러의 리렌더링 처리...


const getAverage = (numbers) => {
    console.log('평균값 계산중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null); // ref 참조 변수

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, [] ); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(
        e => {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('')
            inputEl.current.focus();
        }
        , [number, list]); // number 혹은 list 가 바뀌었을 때만 함수 생성
    // 두 번재 배열은 어떤 값이 변경되었는지 확인

    // 메모제이션
    // 내용이 바뀔 때에만 계산
    const avg = useMemo(() => getAverage(list), [list]); // list 가 바뀔때만 평균값을 계산

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                    list.map((value, index)=> (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>
            <div>
                <b>평균 값:</b>{avg}
            </div>
        </div>
    )
}

export default Average;