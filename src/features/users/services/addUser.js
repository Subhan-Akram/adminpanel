import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { addUser as addUserApi } from "apiTwg/usersController";

const addUser = createAsyncThunk(
  "addUser",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await addUserApi(payload);
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

export default addUser;
