import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { updateCompany as updateCompanyApi } from "../../../apiTwg";

const updateCompany = createAsyncThunk(
  "updateCompany",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await updateCompanyApi(payload);
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

export default updateCompany;
