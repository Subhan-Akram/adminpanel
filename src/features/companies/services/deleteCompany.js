import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { deleteCompany as deleteCompanyApi } from "../../../apiTwg";

const deleteCompany = createAsyncThunk(
  "deleteCompany",
  async ({ dispatch, extId }, { rejectWithValue }) => {
    try {
      const { data } = await deleteCompanyApi(extId);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Company Deleted Successfully",
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

export default deleteCompany;
