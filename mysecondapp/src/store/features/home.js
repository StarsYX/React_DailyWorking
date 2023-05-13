import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// 方法一：
export const fetchHomeMultidataAction = createAsyncThunk("fetch/name", async () => {
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    return res.data
    // const banners = res.data.data.banner.list
    // const recommends = res.data.data.recommend.list
})

// 方法二 async可以传参数，从外面把参数传过来 (extraInfo, {dispatch, getState}) => 
// export const fetchHomeMultidataAction = createAsyncThunk(
//     "fetch/sss",
//     async (extraInfo, {dispatch, getState}) => {
//         // 1.发送网络请求
//         const res = await axios.get('http://123.207.32.32:8000/home/multidata')
//         const banners = res.data.data.banner.list
//         const recommends = res.data.data.recommend.list
//         //2.取出数据，直接dispatch操作（也可以不做，因为下面会调用extraReducers异步回调）
//         dispatch(changeBanners(banners))
//         dispatch(changeRecommends(recommends))

//         //3.返回结果，action状态会变成fulfilled状态
//         return res.data
//     }
// )


const homeSlice = createSlice({
    name: "home",
    initialState: {
        banners: [],
        recommends: []
    },
    reducers: {
        changeBanners(state, {payload}) {
            state.banners = payload
        },
        changeRecommends(state, {payload}) {
            state.recommends = payload
        }
    },
    // 异步操作在此（方法一：）
    // extraReducers: {
    //     [fetchHomeMultidataAction.pending](state, action) {
    //         console.log("---fetchHomeMultidataAction pending");
    //     },
    //     // 
    //     [fetchHomeMultidataAction.fulfilled](state, action) {
    //         const payload = action.payload
    //         state.banners = payload.data.banner.list
    //         state.recommends = payload.data.recommend.list
    //         console.log("---fetchHomeMultidataAction:" + payload);
    //     },
    //     //没有错误，可以不写
    //     [fetchHomeMultidataAction.rejected](state, action) {
    //         console.log("---fetchHomeMultidataAction rejected");
    //     },
    // }
    //异步操作在此（方法二：）
    extraReducers: (builder) => {
        builder.addCase(fetchHomeMultidataAction.pending, (state, action) => {
            console.log("---fetchHomeMultidataAction pending");
        }).addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
            state.banners = payload.data.banner.list
            state.recommends = payload.data.recommend.list
        }).addCase(fetchHomeMultidataAction.rejected, (state, {payload}) => {
            console.log("---fetchHomeMultidataAction rejected");
        })
    }
})

export const {changeBanners, changeRecommends} = homeSlice.actions 

export default homeSlice.reducer;