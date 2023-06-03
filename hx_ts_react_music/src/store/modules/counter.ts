import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 100,
        message: "测试呀",
        address: "你家地址多少"
    },
    reducers: {
        changeMessageAction(state, { payload }) {
            state.message = payload;
        }
    }
})

export const { changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;