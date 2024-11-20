import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllModels as getAllModelsApi } from "apiTwg";

const getAllModels = createAsyncThunk(
  "home/getAllModels",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await getAllModelsApi();

      const { data } = response;
      const tempResponse = data.map((val, i) => ({
        ...val,
      }));
      return tempResponse;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default getAllModels;
