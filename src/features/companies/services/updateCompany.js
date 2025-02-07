import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import {
  addOrganization,
  updateCompany as updateCompanyApi,
} from "../../../apiTwg";

const updateCompany = createAsyncThunk(
  "updateCompany",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    try {
      const { extId, organizations } = payload;
      const organizationExtIds = organizations.map((val) => val.extId);
      await updateCompanyApi(extId, payload);
      const { data: updatedData } = await addOrganization(
        extId,
        organizationExtIds,
      );

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

export default updateCompany;
