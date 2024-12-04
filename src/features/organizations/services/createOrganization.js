import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { createOrganization as createOrganizationApi } from "../../../apiTwg";

const createOrganization = createAsyncThunk(
  "createOrganization",
  async ({ dispatch, payload }, { rejectWithValue }) => {
    debugger;
    try {
      const { data } = await createOrganizationApi(payload);
      console.log("create=====data", data);
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

export default createOrganization;
