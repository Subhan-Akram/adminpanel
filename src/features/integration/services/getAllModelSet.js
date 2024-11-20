/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllModelSet as getAllModelSetApi } from "apiTwg";
import { triggerAlert } from "slice/alertSlice";

const getAllModelSet = createAsyncThunk(
  "integration/getAllModelSet",
  async (dispatch, { rejectWithValue }) => {
    try {
      const getAllModels = await getAllModelSetApi();
      return getAllModels.data;
    } catch (error) {
      dispatch(
        triggerAlert({
          title: "Api Failed",
          text: error?.message,
          alertType: "error",
        }),
      );
      return rejectWithValue(error.response.data || "error in model set");
    }
  },
);

export default getAllModelSet;
