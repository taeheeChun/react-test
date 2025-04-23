import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'; // userSlice.js 에서 export default 한 reducer

// 모든 state 를 관리
export default configureStore({
    reducer: {
        user: userReducer, // user.js 에서 export default 한 reducer
    },
})