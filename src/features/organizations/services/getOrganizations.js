import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerAlert } from "slice/alertSlice";
import { getOrganizations as getOrganizationsApi } from "../../../apiTwg";

const getOrganizations = createAsyncThunk(
  "getOrganizations",
  async ({ dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await getOrganizationsApi();
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

export default getOrganizations;
