import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { getUserByEmail as getUserByEmailApi } from "../../../apiTwg";

const getUserByEmail = createAsyncThunk(
  "getUserBYEmail",
  async ({ email, dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await getUserByEmailApi(email);
      return data;
    } catch (error) {
      dispatch(
        triggerAlert({
          title: "Api Failed",
          text: error?.message,
          alertType: "error",
        })
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export default getUserByEmail;
