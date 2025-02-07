import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { leaveCompanies } from "apiTwg";

const LeaveCompany = createAsyncThunk(
  "LeaveCompany",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { extId, companyExtIds } = payload;
      const { data } = await leaveCompanies(extId, companyExtIds);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Companies removed from organizations Successfully",
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

export default LeaveCompany;
