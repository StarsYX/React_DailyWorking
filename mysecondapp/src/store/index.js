
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter"

import homeReducer from "./features/home"

//@reduxjs/toolkit 3.把counterReducer给configureStore
const store = configureStore({
    reducer: {
        counter: counterReducer,
        home: homeReducer,
    }
})


export default store;