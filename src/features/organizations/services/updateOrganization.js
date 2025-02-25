import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import {
  joinCompanies,
  updateOrganization as updateOrganizationApi,
} from "../../../apiTwg";

const updateOrganization = createAsyncThunk(
  "updateOrganization",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { extId, companies } = payload;
      const companyExtIds = companies.map((val) => val.extId);
      await updateOrganizationApi(extId, payload);
      const { data: updatedData } = await joinCompanies(extId, companyExtIds);

      dispatch(
        triggerAlert({
          title: "Success",
          alertType: "success",
          text: "Company Updated Successfully",
        }),
      );
      return updatedData;
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

export default updateOrganization;
