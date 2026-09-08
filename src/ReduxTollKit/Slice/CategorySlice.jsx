import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtDataWithImage } from "../../Hooks/useInsurtData";
export const CategoeryApi = createAsyncThunk(
  "CategoerySlice/CategoeryApi",
  async () => {
    const res = await useGetData(`api/v1/categories`);
    return res;
  },
);
export const getSpecifCatgorey = createAsyncThunk(
  "CategoerySlice/getSpecifCatgorey",
  async (id) => {
    const res = await useGetData(`/api/v1/categories/${id}`);
    return res;
  },
);
export const CategoeryApiPage = createAsyncThunk(
  "CategoerySlice/CategoeryApiPage",
  async ({ limit, page }) => {
    const res = await useGetData(
      `/api/v1/categories?limit=${limit}&page=${page}`,
    );
    return res;
  },
);
export const AddCategorey = createAsyncThunk(
  "CategoerySlice/AddCategorey",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtDataWithImage("/api/v1/categories", formData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const CategoerySlice = createSlice({
  initialState: {
    records: [],
    loading: true,
    Pagination: [],
    status: "",
    record: [],
    addrecord: [],
  },
  name: "CategoerySlice",
  reducers: {},
  extraReducers: (bulider) => {
    // get All Categorey
    bulider.addCase(CategoeryApi.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = false;
      state.Pagination = action.payload;
    });
    bulider.addCase(CategoeryApi.pending, (state) => {
      state.loading = true;
    });
    // get Categorey Page ( Limit , Page )
    bulider.addCase(CategoeryApiPage.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = false;
      state.Pagination = action.payload;
    });
    bulider.addCase(CategoeryApiPage.pending, (state, action) => {
      state.loading = true;
    });
    // Add Categorey
    bulider.addCase(AddCategorey.fulfilled, (state, action) => {
      state.addrecord = [...state.records, action.payload];
      state.status = action.payload.status;
    });
    bulider.addCase(AddCategorey.pending, (state, action) => {
      state.status = action.payload;
    });
    bulider.addCase(AddCategorey.rejected, (state, action) => {
      state.loading = true;
      state.status = action.payload;
    });
    // getSpecifCatgorey
    bulider.addCase(getSpecifCatgorey.fulfilled, (state, action) => {
      state.record = action.payload.data;
    });
  },
});
export default CategoerySlice.reducer;
