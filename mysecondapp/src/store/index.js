
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter"

//@reduxjs/toolkit 3.把counterReducer给configureStore
const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})


export default store;