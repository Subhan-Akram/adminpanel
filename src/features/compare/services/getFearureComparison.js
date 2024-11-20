import { createAsyncThunk } from "@reduxjs/toolkit";
import { getModelFeature } from "apiTwg";
import { triggerAlert } from "slice/alertSlice";
import { groupedFeatureData } from "utils";

const getFearureComparison = createAsyncThunk(
  "featurecomparison",
  async ({ models, dispatch }, { rejectWithValue }) => {
    try {
      const modelIds = models.map((val) => val.extId);
      const getFeature = await getModelFeature(modelIds);
      const data = groupedFeatureData(getFeature.data, models);
      return { data };
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

export default getFearureComparison;
