import { createAsyncThunk } from "@reduxjs/toolkit";
import { getModelById } from "apis";
import { triggerAlert } from "slice/alertSlice";

const getModel = createAsyncThunk(
  "getModel",
  async ({ dispatch, extId }, { rejectWithValue }) => {
    try {
      const { data } = await getModelById(extId);
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

export default getModel;
