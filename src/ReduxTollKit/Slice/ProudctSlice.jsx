import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtDataWithImage } from "../../Hooks/useInsurtData";
import { useDeleteData } from "../../Hooks/useDeleteData";
import { useEditData } from "../../Hooks/useEditData";
export const FetchProudct = createAsyncThunk(
  "Proudctslice/FetchProudct",
  async ({ limit, page }) => {
    try {
      const res = await useGetData(
        `api/v1/products?limit=${limit}&page=${page}`,
      );
      return res;
    } catch (error) {}
  },
);
//
export const getAllProudct = createAsyncThunk(
  "Proudctslice/getAllProudct",
  async () => {
    try {
      const res = await useGetData(`api/v1/products`);
      return res;
    } catch (error) {}
  },
);
//
export const getSpecifproudct = createAsyncThunk(
  "Proudctslice/getSpecifproudct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/products/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
//
export const DeleteProudct = createAsyncThunk(
  "Proudctslice/DeleteProudct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useDeleteData(`/api/v1/products/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
//
export const AddProudct = createAsyncThunk(
  "Proudctslice/AddProudct",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtDataWithImage("/api/v1/products", formData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
//
export const EditProudct = createAsyncThunk(
  "Proudctslice/EditProudct",
  async ({ formData, id }) => {
    try {
      const res = await useEditData(`/api/v1/products/${id}`, formData);
      return res;
    } catch (error) {}
  },
);
export const searchAllProudct = createAsyncThunk(
  "Proudctslice/searchAllProudct",
  async (queryString) => {
    try {
      const res = await useGetData(`/api/v1/products?${queryString}`);
      return res;
    } catch (error) {}
  },
);
//
export const FetchProudctByCatgorey = createAsyncThunk(
  "Proudctslice/FetchProudctByCatgorey",
  async ({ limit, page, id }) => {
    try {
      const res = await useGetData(
        `/api/v1/products?limit=${limit}&category=${id}&page=${page}`,
      );
      return res;
    } catch (error) {}
  },
);
export const FetchProudctByBrand = createAsyncThunk(
  "Proudctslice/FetchProudctByBrand",
  async ({ limit, page, id }) => {
    try {
      const res = await useGetData(
        `/api/v1/products?limit=${limit}&brand=${id}&page=${page}`,
      );
      return res;
    } catch (error) {}
  },
);
export const Proudctslice = createSlice({
  initialState: {
    records: [],
    proudcts: [],
    loading: true,
    Pagination: [],
    status: null,
    record: [],
    brand: [],
    brandPagination: [],
  },
  name: "CategoerySlice",
  reducers: {},
  extraReducers: (bulider) => {
    // get All FetchProudct
    bulider.addCase(FetchProudct.fulfilled, (state, action) => {
      state.proudcts = action.payload.data;
    });
    bulider.addCase(FetchProudct.rejected, (state) => {
      state.proudcts = action.payload.data;
    });
    //
    bulider.addCase(getAllProudct.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = false;
      state.Pagination = action.payload;
    });
    bulider.addCase(getAllProudct.pending, (state) => {
      state.loading = true;
    });
    // getSpecifproudct
    bulider.addCase(getSpecifproudct.fulfilled, (state, action) => {
      state.record = action.payload.data;
    });
    // Add Proudct
    bulider.addCase(AddProudct.fulfilled, (state, action) => {
      state.records = [...state.records, action.payload.data];
      state.Pagination = action.payload;
      state.loading = false;
      state.status = action.payload.status;
    });
    bulider.addCase(AddProudct.pending, (state, action) => {
      state.loading = true;
      state.status = null;
    });
    // delete
    bulider.addCase(DeleteProudct.fulfilled, (state, action) => {
      state.record = state.record.filter((item) => item._id !== action.payload);
    });
    //Edit
    bulider.addCase(EditProudct.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = false;
      state.status = action.payload.status;
    });
    bulider.addCase(EditProudct.pending, (state, action) => {
      state.loading = true;
      state.status = null;
    });
    // Search
    bulider.addCase(searchAllProudct.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = false;
      state.Pagination = action.payload;
    });
    bulider.addCase(searchAllProudct.pending, (state) => {
      state.loading = true;
    });
    //ByCatgorey
    bulider.addCase(FetchProudctByCatgorey.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.Pagination = action.payload;
    });
    bulider.addCase(FetchProudctByCatgorey.rejected, (state, action) => {
      state.Pagination = action.payload;
    });
    //ByBrand
    bulider.addCase(FetchProudctByBrand.fulfilled, (state, action) => {
      state.brand = action.payload.data;
      state.brandPagination = action.payload;
    });
    bulider.addCase(FetchProudctByBrand.rejected, (state, action) => {
      state.Pagination = action.payload;
    });
  },
});
export default Proudctslice.reducer;
