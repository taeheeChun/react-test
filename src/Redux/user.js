import { createSlice } from '@reduxjs/toolkit'; // createReducer, createAction 대체용

const initialStateValue = {name: "", age: 0, email: ""}

export const userSlice = createSlice({
    name: "user", // 리듀서 이름
    initialState: { value: initialStateValue}, // 데이터 초기값
    reducers: { // 상태가 변하면 어떻게 실행 될지
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue
        },
    },
});

export const { login, logout } = userSlice.actions; // 액션 생성자

export default userSlice.reducer;