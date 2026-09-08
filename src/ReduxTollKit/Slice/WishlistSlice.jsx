//
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtData } from "../../Hooks/useInsurtData";
import { useDeleteData } from "../../Hooks/useDeleteData";
// /
export const AddWishlist = createAsyncThunk(
  "WishlistSlice/AddWishlist",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await useInsurtData(`/api/v1/wishlist`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const DeleteWishlist = createAsyncThunk(
  "WishlistSlice/DeleteWishlist",
  async (id) => {
    const res = await useDeleteData(`/api/v1/wishlist/${id}`);
    return res;
  },
);
export const getAllWishlist = createAsyncThunk(
  "WishlistSlice/getAllWishlist",
  async () => {
    const res = await useGetData(`/api/v1/wishlist`);
    return res;
  },
);
export const WishlistSlice = createSlice({
  initialState: {
    records: [],
    record: [],
    allRecords: [],
    status: null,
  },
  name: "WishlistSlice",
  reducers: {},
  extraReducers: (bulider) => {
    // AddWishlist
    bulider.addCase(AddWishlist.fulfilled, (state, action) => {
      state.records = action.payload.data;
    });
    bulider.addCase(AddWishlist.rejected, (state, action) => {
      state.status = action.payload;
    });
    // DeleteWishlist
    bulider.addCase(DeleteWishlist.fulfilled, (state, action) => {
      state.record = state.record.filter((item) => item._id !== action.payload);
      state.status = action.payload;
    });
    // get ALl
    bulider.addCase(getAllWishlist.fulfilled, (state, action) => {
      state.allRecords = action.payload.data;
      state.status = action.payload;
    });
  },
});
export default WishlistSlice.reducer;
