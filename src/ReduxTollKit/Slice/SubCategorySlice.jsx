import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtData } from "../../Hooks/useInsurtData";
export const AddSubCategorey = createAsyncThunk(
  "SubCategoerySlice/AddSubCategorey",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData("/api/v1/subcategories", data);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const getOneSubCategory = createAsyncThunk(
  "SubCategoerySlice/getOneSubCategory",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
      return res;
    
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
//
export const SubCategoerySlice = createSlice({
  initialState: { records: [], loading: true, status: null },
  name: "SubCategoerySlice",
  reducers: {},
  extraReducers: (bulider) => {
    // Add Categorey
    bulider.addCase(AddSubCategorey.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = false;
      state.status = action.payload.status;
    });
    bulider.addCase(AddSubCategorey.pending, (state, action) => {
      state.loading = true;
      state.status = null;
    });
    bulider.addCase(getOneSubCategory.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = false;
      state.status = action.payload.status;
    });
    bulider.addCase(getOneSubCategory.pending, (state, action) => {
      state.loading = true;
      state.status = null;
    });
  },
});

export default SubCategoerySlice.reducer;
