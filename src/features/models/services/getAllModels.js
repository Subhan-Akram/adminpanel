import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { getModels } from "apis";

const getAllModels = createAsyncThunk(
  "getAllModels",
  async ({ dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await getModels();
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

export default getAllModels;
