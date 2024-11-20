import { createAsyncThunk } from "@reduxjs/toolkit";

const removeCompareModel = createAsyncThunk(
  "home/removeModels",
  async ({ removeSelectedModel }, { rejectWithValue }) => {
    try {
      localStorage.removeItem("comparisionData");
      return { removeSelectedModelData: removeSelectedModel };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default removeCompareModel;
