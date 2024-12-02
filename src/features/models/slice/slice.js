import { createSlice } from "@reduxjs/toolkit";
import {
  getSearchModels,
  getModel,
  createModel,
  getAllModels,
  updateModel,
  deleteModel,
  getAllModelTags,
} from "../services";

const initialState = {
  models: [],
  model: { features: [] },
  tags: [],
  selectedModels: [],
  selectedModelLength: 0,
  modalModels: [],
  isLoading: false,
  error: "",
  crudLoading: false,
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

    addSelectedModel: (state, action) => {
      const { payload } = action;
      state.selectedModels.push(payload);
    },
    removeSelectedModel: (state, action) => {
      const { payload } = action;
      state.selectedModels = state.selectedModels.filter(
        (val) => val.extId !== payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createModel.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(createModel.fulfilled, (state, action) => {
        const model = action.payload;
        state.crudLoading = false;
        state.models = [model, ...state.models];
      })
      .addCase(createModel.rejected, (state) => {
        state.crudLoading = false;
      })
      .addCase(getAllModels.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllModels.fulfilled, (state, action) => {
        const models = action.payload;
        state.isLoading = false;
        state.models = models;
      })
      .addCase(getAllModels.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateModel.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(updateModel.fulfilled, (state, action) => {
        const model = action.payload;
        state.crudLoading = false;
        const findModelIndex = state.models.findIndex(
          (val) => val.extId === model.extId
        );
        state.models[findModelIndex] = model;
      })
      .addCase(updateModel.rejected, (state) => {
        state.crudLoading = false;
      })
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
      .addCase(getSearchModels.rejected, (state) => {
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
      .addCase(getModel.rejected, (state) => {
        state.isLoading = false;
        state.error = "no data found";
      })
      .addCase(deleteModel.pending, (state) => {
        state.crudLoading = true;
        state.error = null;
      })
      .addCase(deleteModel.fulfilled, (state, action) => {
        const model = action.payload;
        state.crudLoading = false;
        state.models = state.models.filter((val) => val.extId !== model.extId);
      })
      .addCase(deleteModel.rejected, (state) => {
        state.crudLoading = false;
      })
      .addCase(getAllModelTags.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllModelTags.fulfilled, (state, action) => {
        const tags = action.payload;
        state.isLoading = false;
        state.tags = tags;
      })
      .addCase(getAllModelTags.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default slice;
