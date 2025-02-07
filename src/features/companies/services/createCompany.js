import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import {
  addOrganization,
  createCompany as createCompanyApi,
} from "../../../apiTwg";

const createCompany = createAsyncThunk(
  "createCompany",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { organizations } = payload;
      const organizationExtIds = organizations.map((val) => val.extId);
      const { data } = await createCompanyApi(payload);
      const { extId } = data;
      const { data: updatedData } = await addOrganization(
        extId,
        organizationExtIds,
      );
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Company Created Successfully",
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

export default createCompany;
