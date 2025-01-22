import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { deleteUser as deleteUserApi } from "apiTwg/usersController";

const deleteUser = createAsyncThunk(
  "deleteUser",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await deleteUserApi(payload);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "User Deleted Successfully",
          alertType: "success",
        }),
      );
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

export default deleteUser;
