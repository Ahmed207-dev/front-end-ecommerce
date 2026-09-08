import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEdit } from "../../Hooks/useEditData";
export const editProfileData = createAsyncThunk(
  "UpdateUserData/editProfileData",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit("/api/v1/users/updateMe", data);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const restPassword = createAsyncThunk(
  "UpdateUserData/forgetPassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit("/api/v1/users/changeMyPassword", data);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const UpdateUserDataSlice = createSlice({
  initialState: { records: [], record: [], status: null },
  name: "UpdateUserData",
  reducers: {},
  extraReducers: (bulider) => {
    // Add
    bulider.addCase(editProfileData.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.status = action.payload.status;
    });
    bulider.addCase(editProfileData.rejected, (state, action) => {
      state.loading = true;
      state.status = null;
    });
    bulider.addCase(restPassword.fulfilled, (state, action) => {
      state.record = action.payload.data;
      state.status = action.payload;
    });
    bulider.addCase(restPassword.rejected, (state, action) => {
      state.loading = true;
      state.status = null;
    });
  },
});

export default UpdateUserDataSlice.reducer;
