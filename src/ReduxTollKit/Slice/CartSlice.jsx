import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtData } from "../../Hooks/useInsurtData";
import { useDeleteData } from "../../Hooks/useDeleteData";
import { useEdit } from "../../Hooks/useEditData";
// /
export const addToCart = createAsyncThunk(
  "cartSlice/addToCart",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData(`/api/v1/cart`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const getAllCart = createAsyncThunk(
  "cartSlice/getAllCart",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/cart`);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const deleteSpecifCart = createAsyncThunk(
  "cartSlice/deleteSpecifCart",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useDeleteData(`api/v1/cart/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const deleteAllCart = createAsyncThunk(
  "cartSlice/deleteAllCart",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useDeleteData(`/api/v1/cart`);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);

export const updateQunatity = createAsyncThunk(
  "cartSlice/updateQunatity",
  async ({ id, data }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit(`/api/v1/cart/${id}`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const applayCoupon = createAsyncThunk(
  "cartSlice/applayCoupon",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit(`/api/v1/cart/applyCoupon`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const cartSlice = createSlice({
  initialState: {
    records: [],
    status: [],
    data: [],
    loading: true,
  },
  name: "cartSlice",
  reducers: {},
  extraReducers: (bulider) => {
    // addToCart
    bulider.addCase(addToCart.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(addToCart.rejected, (state, action) => {
      state.status = action.payload;
    });
    // getAllCart
    bulider.addCase(getAllCart.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = action.payload;
      state.loading = false;
    });
    bulider.addCase(getAllCart.pending, (state, action) => {
      state.loading = true;
    });
    bulider.addCase(getAllCart.rejected, (state, action) => {
      state.status = action.payload;
      state.loading = false;
    });
    // deleteAllCart
    bulider.addCase(deleteAllCart.fulfilled, (state, action) => {
      state.data = [];
      state.status = action.payload;
    });
    bulider.addCase(deleteAllCart.rejected, (state, action) => {
      state.status = action.payload;
    });
    // deleteSpecifCart
    bulider.addCase(deleteSpecifCart.fulfilled, (state, action) => {
      state.records = state.records.filter(
        (item) => item?._id !== action.payload,
      );
      state.status = action.payload;
    });
    bulider.addCase(deleteSpecifCart.rejected, (state, action) => {
      state.status = action.payload;
    });
    // updateQunatity
    bulider.addCase(updateQunatity.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = action.payload;
      state.loading = false;
    });
    bulider.addCase(updateQunatity.pending, (state, action) => {
      state.loading = true;
    });
    bulider.addCase(updateQunatity.rejected, (state, action) => {
      state.status = action.payload;
      state.error = action.payload;
      state.loading = false;
    });
    // applayCoupon
    bulider.addCase(applayCoupon.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(applayCoupon.rejected, (state, action) => {
      state.status = action.payload;
      state.error = action.payload;
    });
  },
});
export default cartSlice.reducer;
