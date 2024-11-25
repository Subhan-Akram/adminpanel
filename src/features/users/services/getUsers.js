import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { getUsers as getUsersApi } from "../../../apiTwg";

const getUsers = createAsyncThunk(
  "getUsers",
  async ({ dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await getUsersApi();
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

export default getUsers;
