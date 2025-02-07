import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import {
  createOrganization as createOrganizationApi,
  joinCompanies,
} from "../../../apiTwg";

const createOrganization = createAsyncThunk(
  "createOrganization",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { companies } = payload;
      const companyExtIds = companies.map((val) => val.extId);
      const { data } = await createOrganizationApi(payload);
      const { extId } = data;
      const { data: updatedData } = await joinCompanies(extId, companyExtIds);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Organization Created Successfully",
          alertType: "success",
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

export default createOrganization;
