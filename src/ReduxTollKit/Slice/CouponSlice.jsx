import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtData } from "../../Hooks/useInsurtData";
import { useDeleteData } from "../../Hooks/useDeleteData";
import { useEdit } from "../../Hooks/useEditData";
//
export const AddCoupon = createAsyncThunk(
  "couponSlice/AddCoupon",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData(`/api/v1/coupons`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const getAllCoupon = createAsyncThunk(
  "couponSlice/getAllCoupon",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/coupons`);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const deleteCoupon = createAsyncThunk(
  "couponSlice/deleteCoupon",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await useDeleteData(`/api/v1/coupons/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const getSpecifCoupon = createAsyncThunk(
  "couponSlice/getSpecifCoupon",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/coupons/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const editCoupon = createAsyncThunk(
  "couponSlice/editCoupon",
  async ({ id, data }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit(`/api/v1/coupons/${id}`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const couponSlice = createSlice({
  initialState: {
    records: [],
    record: [],
  },
  name: "couponSlice",
  reducers: {},
  extraReducers: (bulider) => {
    // AddWishlist
    bulider.addCase(AddCoupon.fulfilled, (state, action) => {
      state.records = [...state.records, action.payload.data.data];
      state.status = action.payload;
    });
    bulider.addCase(AddCoupon.rejected, (state, action) => {
      state.status = action.payload;
    });
    //get all
    bulider.addCase(getAllCoupon.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(getAllCoupon.rejected, (state, action) => {
      state.status = action.payload;
    });
    // delete
    bulider.addCase(deleteCoupon.fulfilled, (state, action) => {
      state.records = state.records.filter(
        (item) => item._id !== action.payload,
      );
      state.status = action.payload;
    });
    // specif
    bulider.addCase(getSpecifCoupon.fulfilled, (state, action) => {
      state.record = action.payload.data;
    });
    // edit editCoupon
    bulider.addCase(editCoupon.fulfilled, (state, action) => {
      state.record = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(editCoupon.rejected, (state, action) => {
      state.status = action.payload;
    });
  },
});
export default couponSlice.reducer;
