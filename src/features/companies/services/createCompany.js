import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { createCompany as createCompanyApi } from "../../../apiTwg";

const createCompany = createAsyncThunk(
  "createCompany",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await createCompanyApi(payload);
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

export default createCompany;
