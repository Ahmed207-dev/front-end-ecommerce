import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtData } from "../../Hooks/useInsurtData";
import { useDeleteData } from "../../Hooks/useDeleteData";
import { useEdit } from "../../Hooks/useEditData";
//
export const AddAddress = createAsyncThunk(
  "addressSlice/AddAddress",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData(`/api/v1/addresses`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const getAllAdress = createAsyncThunk(
  "addressSlice/getAllAdress",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/addresses`);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const deleteAddress = createAsyncThunk(
  "addressSlice/deleteAddress",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await useDeleteData(`/api/v1/addresses/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const getSpecifData = createAsyncThunk(
  "addressSlice/getSpecifData",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/addresses/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const editAddress = createAsyncThunk(
  "addressSlice/editAddress",
  async ({ id, data }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit(`/api/v1/addresses/${id}`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const addressSlice = createSlice({
  initialState: {
    records: [],
    data: [],
    record: [],
  },
  name: "addressSlice",
  reducers: {},
  extraReducers: (bulider) => {
    // AddWishlist
    bulider.addCase(AddAddress.fulfilled, (state, action) => {
      state.records = action.payload.data;
    });
    bulider.addCase(AddAddress.rejected, (state, action) => {
      state.status = action.payload;
    });
    // get
    bulider.addCase(getAllAdress.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    bulider.addCase(getAllAdress.rejected, (state, action) => {
      state.status = action.payload;
    });
    // delete
    bulider.addCase(deleteAddress.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload);
      state.status = action.payload;
    });
    bulider.addCase(deleteAddress.rejected, (state, action) => {
      state.status = action.payload;
    });
    // getspecifData
    bulider.addCase(getSpecifData.fulfilled, (state, action) => {
      state.record = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(getSpecifData.rejected, (state, action) => {
      state.status = action.payload;
    });
    // editAddress
    bulider.addCase(editAddress.fulfilled, (state, action) => {
      state.record = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(editAddress.rejected, (state, action) => {
      state.status = action.payload;
    });
  },
});
export default addressSlice.reducer;
