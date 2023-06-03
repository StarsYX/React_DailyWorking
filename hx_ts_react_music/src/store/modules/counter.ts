import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 100,
        message: "测试呀",
        address: "你家地址多少"
    },
    reducers: {

    }
})

export default counterSlice.reducer;