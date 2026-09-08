import { useEdit } from "../../Hooks/useEditData";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtData } from "../../Hooks/useInsurtData";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//
export const AddOrder = createAsyncThunk(
  "orderSlice/AddOrder",
  async ({ id, body }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData(`/api/v1/orders/${id}`, body);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const getAllOrder = createAsyncThunk(
  "orderSlice/getAllOrder",
  async ({ page, limit }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(
        `/api/v1/orders?limit=${limit}&page=${page}`,
      );
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const specifOrder = createAsyncThunk(
  "orderSlice/specifOrder",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/orders/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const ChangeStatus = createAsyncThunk(
  "orderSlice/ChangeStatus",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit(`/api/v1/orders/${id}/pay`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const ChangeStatusDeliver = createAsyncThunk(
  "orderSlice/ChangeStatusDeliver",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit(`/api/v1/orders/${id}/deliver`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const Ordercard = createAsyncThunk(
  "orderSlice/Ordercard",
  async ({ id, body }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(
        `/api/v1/orders/checkout-session/${id}`,
        body,
      );
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
//
export const orderSlice = createSlice({
  initialState: {
    records: [],
  },
  name: "orderSlice",
  reducers: {},
  extraReducers: (bulider) => {
    // Add order
    bulider.addCase(AddOrder.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(AddOrder.pending, (state, action) => {
      state.status = action.payload;
    });
    bulider.addCase(getAllOrder.fulfilled, (state, action) => {
      state.records = action.payload.data;
      console.log(action.payload);

      state.status = action.payload;
    });
    bulider.addCase(getAllOrder.pending, (state, action) => {
      state.status = action.payload;
    });
    bulider.addCase(specifOrder.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(specifOrder.pending, (state, action) => {
      state.status = action.payload;
    });
    bulider.addCase(ChangeStatus.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(ChangeStatus.pending, (state, action) => {
      state.status = action.payload;
    });
    bulider.addCase(ChangeStatusDeliver.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(ChangeStatusDeliver.pending, (state, action) => {
      state.status = action.payload;
    });
    bulider.addCase(Ordercard.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(Ordercard.pending, (state, action) => {
      state.status = action.payload;
    });
  },
});
export default orderSlice.reducer;
