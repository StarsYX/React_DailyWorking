import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners } from "../service/recommend";

//方法一：
// export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
//     console.log("--fetchBannerDataAction");
//     const res = await getBanners();
//     console.log("--请求到数据了:",res);
//     return res.banners;
// })

//方法二：
export const fetchBannerDataAction = createAsyncThunk(
    'banners', 
    async (args, { dispatch }) => {
    console.log("--fetchBannerDataAction");
    const res = await getBanners();
    console.log("--请求到数据了:",res);
    dispatch(changeBannersAction(res.banners));
})

interface IRecommendState {
    banners: any[]
}

const initialState: IRecommendState = {
    banners: []
}

const recommendSlice = createSlice({
    name: "recommend",
    initialState,
    reducers: {
        // 方法二：
        changeBannersAction(state, { payload }) {
            state.banners = payload;
        }
    },
    //方法一：
    // extraReducers: (builder) => {
    //     builder.addCase(fetchBannerDataAction.pending, (state, action) => {
    //         console.log("请求pending:", "pending")
    //     }).addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
    //         console.log("请求成功:", "fulfilled")
    //         state.banners = payload;
    //     }).addCase(fetchBannerDataAction.rejected, () => {
    //         console.log("请求失败:", "rejected")
    //     })
    // }
})

//方法二
export const { changeBannersAction } = recommendSlice.actions;

export default recommendSlice.reducer;