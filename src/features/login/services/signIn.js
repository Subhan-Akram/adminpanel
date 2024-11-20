import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "apiTwg";
import { triggerAlert } from "slice/alertSlice";

const signIn = createAsyncThunk(
  "auth/login",
  async ({ credentials, dispatch }, { rejectWithValue }) => {
    try {
      const response = await loginUser(credentials);
      const data = response.data;
      sessionStorage.setItem("access_token", data.access_token);
      sessionStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      dispatch(
        triggerAlert({
          title: "Api Failed",
          text: error?.message,
          alertType: "error",
        }),
      );
      return rejectWithValue(error.response.data);
    }
  },
);

export default signIn;
