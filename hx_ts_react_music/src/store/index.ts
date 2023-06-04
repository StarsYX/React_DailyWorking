// redux相关： 1.导入，创建store
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux';
import CounterReducer from "./modules/counter";

import recommendReducer from '@/views/discover/c-views/recommend/store/recommend';

const store = configureStore({
    reducer: {
        counter: CounterReducer,
        recommend: recommendReducer,
    }

})

// 函数本身有类型的，拿到store.getState函数类型
type GetStateFnType = typeof store.getState
// 拿到返回值类型
export type IRootState = ReturnType<GetStateFnType>

type DispatchType = typeof store.dispatch

// useAppSelector hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store;