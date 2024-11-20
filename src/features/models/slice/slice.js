import { createSlice } from "@reduxjs/toolkit";
import { getSearchModels, getModel } from "../services";

const initialState = {
  models: [],
  model: { features: [] },
  selectedModels: [],
  selectedModelLength: 0,
  modalModels: [],
  isLoading: false,
  error: "",
};

export const slice = createSlice({
  name: "models",
  initialState,
  reducers: {
    setModel: (state, action) => {
      const {
        payload: { data },
      } = action;
      state.model = data;
    },
    setSelectedModelLength: (state, action) => {
      state.selectedModelLength = action.payload;
    },
    setModelsArray: (state, action) => {
      const { name, data } = action.payload;
      state[name] = data;
    },
    removeModels: (state, action) => {
      state.modalModels = [];
    },
    addSelectedModel: (state, action) => {
      const { payload } = action;
      state.selectedModels.push(payload);
    },
    removeSelectedModel: (state, action) => {
      const { payload } = action;
      state.selectedModels = state.selectedModels.filter(
        (val) => val.extId !== payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchModels.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSearchModels.fulfilled, (state, action) => {
        const { models, isModal } = action.payload;
        state.isLoading = false;
        if (isModal) {
          state.modalModels = models;
        } else {
          state.models = models;
        }
      })
      .addCase(getSearchModels.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getModel.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getModel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.model = action.payload;
      })
      .addCase(getModel.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "no data found";
      });
  },
});

export default slice;
