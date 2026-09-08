import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useInsurtData } from "../../Hooks/useInsurtData";
import { useGetData } from "../../Hooks/useGetData";
import { useDeleteData } from "../../Hooks/useDeleteData";
import { useEdit } from "../../Hooks/useEditData";
// /api/v1/reviews/6a8c5340a2a6634c4ea236d7
export const AddReview = createAsyncThunk(
  "reveiwSlice/AddReview",
  async ({ id, data }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData(`/api/v1/products/${id}/reviews`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const AllReview = createAsyncThunk(
  "reveiwSlice/AllReview",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/products/${id}/reviews`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const DeleteReview = createAsyncThunk(
  "reveiwSlice/DeleteReview",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await useDeleteData(`/api/v1/reviews/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const GetSpecifReview = createAsyncThunk(
  "reveiwSlice/GetSpecifReview",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/reviews/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const EditReview = createAsyncThunk(
  "reveiwSlice/EditReview",
  async ({ id, data }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit(`/api/v1/reviews/${id}`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const reveiwSlice = createSlice({
  initialState: { records: [], record: [], status: "" },
  name: "reveiwSlice",
  reducers: {},
  extraReducers: (bulider) => {
    //  AddReview
    bulider.addCase(AddReview.fulfilled, (state, action) => {
      state.records = [...state.records, action.payload.data];
      state.status = action.payload.status;
    });
    bulider.addCase(AddReview.rejected, (state, action) => {
      state.records = action.payload.data;
    });
    // AllReview
    bulider.addCase(AllReview.fulfilled, (state, action) => {
      state.records = action.payload.data;
    });
    bulider.addCase(AllReview.rejected, (state, action) => {
      state.records = action.payload;
    });
    // DeleteReview
    bulider.addCase(DeleteReview.fulfilled, (state, action) => {
      state.records = state.records.filter(
        (item) => item._id !== action.payload,
      );
    });
    bulider.addCase(DeleteReview.rejected, (state, action) => {
      state.records = action.payload;
    });
    // GetSpecifReview
    bulider.addCase(GetSpecifReview.fulfilled, (state, action) => {
      state.record = action.payload.data;
    });
    bulider.addCase(GetSpecifReview.rejected, (state, action) => {
      state.record = action.payload;
    });
    // edit
    bulider.addCase(EditReview.fulfilled, (state, action) => {
      state.record = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(EditReview.rejected, (state, action) => {
      state.record = action.payload;
    });
  },
});
export default reveiwSlice.reducer;
