import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { deleteCompany as deleteCompanyApi } from "../../../apiTwg";

const deleteCompany = createAsyncThunk(
  "deleteCompany",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { data } = await deleteCompanyApi(payload);
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

export default deleteCompany;
