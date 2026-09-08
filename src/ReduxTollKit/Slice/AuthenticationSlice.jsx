import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../Hooks/useGetData";
import { useInsurtData } from "../../Hooks/useInsurtData";
import { useEdit } from "../../Hooks/useEditData";
export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData(`/api/v1/auth/signup`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const logInUser = createAsyncThunk(
  "userSlice/logInUser",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData(`/api/v1/auth/login`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const forgetPassword = createAsyncThunk(
  "userSlice/forgetPassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData(`/api/v1/auth/forgotPasswords`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const verifyCode = createAsyncThunk(
  "userSlice/verifyCode",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsurtData(`/api/v1/auth/verifyResetCode`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const resetPassword = createAsyncThunk(
  "userSlice/resetPassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useEdit(`/api/v1/auth/resetPassword`, data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || error);
    }
  },
);
export const userSlice = createSlice({
  initialState: {
    records: [],
  },
  name: "userSlice",
  reducers: {},
  extraReducers: (bulider) => {
    //sign up
    bulider.addCase(createUser.fulfilled, (state, action) => {
      state.records = action.payload.data;
    });
    bulider.addCase(createUser.rejected, (state, action) => {
      state.records = action.payload;
    });
    // log in
    bulider.addCase(logInUser.fulfilled, (state, action) => {
      state.records = action.payload.data;
    });
    bulider.addCase(logInUser.rejected, (state, action) => {
      state.records = action.payload;
    });
    // forgetPassword
    bulider.addCase(forgetPassword.fulfilled, (state, action) => {
      state.records = action.payload.data;
    });
    bulider.addCase(forgetPassword.rejected, (state, action) => {
      state.records = action.payload;
    });
    // verifyCode
    bulider.addCase(verifyCode.fulfilled, (state, action) => {
      state.records = action.payload.data;
    });
    bulider.addCase(verifyCode.rejected, (state, action) => {
      state.records = action.payload;
    });
    // edit password
    bulider.addCase(resetPassword.fulfilled, (state, action) => {
      state.records = action.payload.data;
    });
    bulider.addCase(resetPassword.rejected, (state, action) => {
      state.records = action.payload;
    });
  },
});
export default userSlice.reducer;
