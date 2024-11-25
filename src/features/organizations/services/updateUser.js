import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { updateUser as updateUserApi } from "apiTwg/usersController";

const updateUser = createAsyncThunk(
  "updateUser",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await updateUserApi(payload);
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

export default updateUser;
