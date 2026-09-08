import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtDataWithImage } from "../../Hooks/useInsurtData";
export const FetchBrand = createAsyncThunk(
  "BrandSlice/FetchBrand",
  async () => {
    const res = await useGetData(`/api/v1/brands`);
    return res;
  },
);
export const getOneBrand = createAsyncThunk(
  "BrandSlice/getOneBrand",
  async (id) => {
    const res = await useGetData(`/api/v1/brands/${id}`);
    return res;
  },
);
export const FetchBrandPage = createAsyncThunk(
  "BrandSlice/FetchBrandPage",
  async ({ limit, page }) => {
    const res = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`);
    return res;
  },
);
export const AddBrand = createAsyncThunk(
  "BrandSlice/AddBrand",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtDataWithImage("/api/v1/brands", formData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const BrandSlice = createSlice({
  initialState: {
    records: [],
    loading: true,
    Pagination: [],
    status: null,
    record: [],
  },
  name: "CategoerySlice",
  reducers: {},
  extraReducers: (bulider) => {
    // get All Categorey
    bulider.addCase(FetchBrand.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = false;
      state.Pagination = action.payload;
    });
    bulider.addCase(FetchBrand.pending, (state) => {
      state.loading = true;
    });
    // get Categorey Page ( Limit , Page )
    bulider.addCase(FetchBrandPage.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = false;
      state.Pagination = action.payload;
    });
    bulider.addCase(FetchBrandPage.pending, (state, action) => {
      state.loading = true;
    });
    // Add Categorey
    bulider.addCase(AddBrand.fulfilled, (state, action) => {
      state.records = [...state.records, action.payload.data];
      state.Pagination = action.payload;
      state.loading = false;
      state.status = action.payload.status;
    });
    bulider.addCase(AddBrand.pending, (state, action) => {
      state.loading = true;
      state.status = null;
    });
    //
    bulider.addCase(getOneBrand.fulfilled, (state, action) => {
      state.record = action.payload.data;
    });
  },
});
export default BrandSlice.reducer;
