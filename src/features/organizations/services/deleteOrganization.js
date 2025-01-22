import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { deleteOrganization as deleteOrganizationApi } from "../../../apiTwg";

const deleteOrganization = createAsyncThunk(
  "deleteOrganization",
  async ({ dispatch, extId }, { rejectWithValue }) => {
    try {
      const { data } = await deleteOrganizationApi(extId);
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Organization Deleted Successfully",
          alertType: "success",
        })
      );
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

export default deleteOrganization;
