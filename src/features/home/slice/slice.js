import { createSlice } from "@reduxjs/toolkit";
import { getAllModels, getAllModelTags, removeCompareModel } from "../services";
import { countObjects } from "utils";

const initialState = {
  tags: [],
  allModelTags: [],
  isLoading: false,
  isSearchDone: false,
  error: "",
};

export const slice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addModelTag: (state, action) => {
      const { payload } = action;
      if (!state.tags.includes(payload)) {
        state.tags.push(payload);
      }
    },
    removeModelTag: (state, action) => {
      const { payload } = action;
      state.tags = state.tags.filter((item) => item !== payload);
    },

    setModelCollection: (state, action) => {
      const { payload } = action;
      state.allModelsCollection = payload;
    },

    setCollectionByName: (state, action) => {
      const {
        payload: { name, data },
      } = action;
      state[name] = data;
    },
    resetCollection: (state, action) => {
      return initialState;
    },
    swapModels: (state, action) => {
      const index = action.payload;
      if (
        index >= 0 &&
        index < state.mergeSelectedModelsCollection.length - 1
      ) {
        const temp = state.mergeSelectedModelsCollection[index];
        state.mergeSelectedModelsCollection[index] =
          state.mergeSelectedModelsCollection[index + 1];
        state.mergeSelectedModelsCollection[index + 1] = temp;
      }
    },
    setSearchDone: (state, action) => {
      state.isSearchDone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllModels.pending, (state) => {
        state.isModelCardLoading = true;
        state.error = null;
      })
      .addCase(getAllModels.fulfilled, (state, action) => {
        state.isModelCardLoading = false;
        state.allModelsCollection = action.payload;
      })
      .addCase(getAllModels.rejected, (state, action) => {
        state.isModelCardLoading = false;
        state.error = action.payload;
      })
      .addCase(removeCompareModel.pending, (state) => {
        state.isFeatureLoading = true;
        state.error = null;
      })
      .addCase(removeCompareModel.fulfilled, (state, action) => {
        state.isFeatureLoading = false;
        const { removeSelectedModelData } = action.payload;
        const filterCollection = [...state.mergeSelectedModelsCollection];
        const getRemoveIndex = filterCollection.findIndex(
          (val) => val.extId === removeSelectedModelData.extId,
        );
        if (getRemoveIndex !== -1) {
          filterCollection.splice(getRemoveIndex, 1);
          filterCollection.push("");
          state.mergeSelectedModelsCollection = filterCollection;
        }
        state.modalSelectedModels = state.modalSelectedModels.filter(
          (val) => val.extId !== removeSelectedModelData.extId,
        );
        state.modelsCollection = state.modelsCollection.filter(
          (val) => val.extId !== removeSelectedModelData.extId,
        );
        state.totalSelectedModelsLength = countObjects(
          state.mergeSelectedModelsCollection,
        );
      })
      .addCase(removeCompareModel.rejected, (state, action) => {
        state.isFeatureLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllModelTags.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllModelTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allModelTags = action.payload;
      })
      .addCase(getAllModelTags.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice;
