//@reduxjs/toolkit, 1.引入“@reduxjs/toolkit”库
import { createSlice } from "@reduxjs/toolkit"

//@reduxjs/toolkit, 2.初始化createSlice
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 890
    },
    reducers: {
        addCustomNumber(state, action) {
            const payload = action.payload
            state.counter = state.counter + payload
            console.log("---addCustomNumber-我被点击了呀", action);
        },
        // { payload}：对action进行解构
        subCustomNumber(state, { payload}) {
            console.log("-subCustomNumber---我被点击了呀", payload);
            state.counter = state.counter - payload
        }
    }
})

export const {addCustomNumber, subCustomNumber} = counterSlice.actions 
// export {
//     addCustomNumber,
//     subCustomNumber
// }

export default counterSlice.reducer;