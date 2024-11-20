import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllLanguageCode as getAllLanguageCodeApi } from "apiTwg";
import { triggerAlert } from "slice/alertSlice";

const getAllLanguageCode = createAsyncThunk(
  "integration/getAllLanguageCode",
  async (dispatch, { rejectWithValue }) => {
    try {
      const getAllLanguage = await getAllLanguageCodeApi();
      return getAllLanguage.data;
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

export default getAllLanguageCode;
