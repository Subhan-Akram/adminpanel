import { createAsyncThunk } from "@reduxjs/toolkit";
import { getModelTags } from "apis";
import { triggerAlert } from "slice/alertSlice";

const getAllModelTags = createAsyncThunk(
  "getAllModelTags",
  async (dispatch, { rejectWithValue }) => {
    try {
      const response = await getModelTags();
      const { data } = response;
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

export default getAllModelTags;
