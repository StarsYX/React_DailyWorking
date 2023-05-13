import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 890
    },
    reducers: {
        addCustomNumber(state, action) {

        },
        subCustomNumber(state, action) {

        }
    }
})

export default counterSlice.reducer;