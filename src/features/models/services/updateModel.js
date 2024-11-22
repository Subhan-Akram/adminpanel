import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { updateModel as updateModelApi } from "apiTwg/aiModelController";

const updateModel = createAsyncThunk(
  "updateModel",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await updateModelApi(payload);
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

export default updateModel;
