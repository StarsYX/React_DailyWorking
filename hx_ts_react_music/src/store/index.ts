// redux相关： 1.导入，创建store
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import CounterReducer from "./modules/counter";

const store = configureStore({
    reducer: {
        counter: CounterReducer,
    }
})

// 函数本身有类型的，拿到store.getState函数类型
type GetStateFnType = typeof store.getState
// 拿到返回值类型
export type IRootState = ReturnType<GetStateFnType>

// useAppSelector hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store;