import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { createUser as createUserApi } from "apiTwg/usersController";

const createUser = createAsyncThunk(
  "createUser",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await createUserApi(payload);
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

export default createUser;
