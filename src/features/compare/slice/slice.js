import { createSlice } from "@reduxjs/toolkit";
import {
  getChatPrompts,
  getFearureComparison,
  getModel,
  getRecommendedPrompts,
} from "../services";
import { updateComparisionMergeCollection } from "utils";

const initialState = {
  promptData: [],
  recommendedPrompts: [],
  isLoading: false,
  error: null,
  promptQuery: "",
  isRecommendedPromptLoading: false,
  getModelLoading: false,
  comparisonData: [],
  chatLoading: false,
  tryPrompt: {
    extId: "",
    logoUrl: "",
    description: "",
    tags: [],
    promptData: [],
  },
};

// Creating the slice
const slice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    resetComparisonData: (state) => {
      state.comparisonData = [];
    },
    clearPromptData: (state) => {
      state.promptData = [];
      state.promptQuery = "";
      state.error = null;
    },
    addPromptQuery: (state, action) => {
      state.promptQuery = action.payload;
    },
    addTryPrompt: (state, action) => {
      state.tryPrompt = { ...state.tryPrompt, ...action.payload };
    },
    removeTryPromptData: (state, action) => {
      state.tryPrompt = initialState.tryPrompt;
    },
    swapModels: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.comparisonData.length - 1) {
        const temp = state.comparisonData[index];
        state.comparisonData[index] = state.comparisonData[index + 1];
        state.comparisonData[index + 1] = temp;
      }
    },
    removeModelPromptData: (state, action) => {
      const keysToDelete = action.payload;
      state.promptData = state.promptData
        .map((prompt) => {
          delete prompt[keysToDelete];
          const remainingKeys = Object.keys(prompt);
          if (
            remainingKeys.length === 1 &&
            remainingKeys[0] === "requestedPrompt"
          ) {
            delete prompt["requestedPrompt"];
          }
          return prompt;
        })
        .filter((prompt) => Object.keys(prompt).length > 0);
    },
    removeComparisionData: (state, action) => {
      const { payload } = action;
      state.comparisonData = updateComparisionMergeCollection(
        state.comparisonData.filter((val) => val.extId !== payload),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChatPrompts.pending, (state) => {
        state.chatLoading = true;
        state.error = null;
      })
      .addCase(getChatPrompts.fulfilled, (state, action) => {
        const { data, isTryPrompt } = action.payload;
        state.chatLoading = false;
        if (isTryPrompt) {
          state.tryPrompt.promptData = [...state.tryPrompt.promptData, data];
        } else {
          state.promptData = [...state.promptData, data];
        }
      })
      .addCase(getChatPrompts.rejected, (state, action) => {
        state.chatLoading = false;
        state.error = action.payload;
      })
      .addCase(getRecommendedPrompts.pending, (state) => {
        state.isRecommendedPromptLoading = true;
        state.error = null;
      })
      .addCase(getRecommendedPrompts.fulfilled, (state, action) => {
        state.isRecommendedPromptLoading = false;
        state.recommendedPrompts = action.payload;
      })
      .addCase(getRecommendedPrompts.rejected, (state, action) => {
        state.isRecommendedPromptLoading = false;
        state.error = action.payload;
      })
      .addCase(getFearureComparison.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFearureComparison.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.comparisonData = updateComparisionMergeCollection(data);
      })
      .addCase(getFearureComparison.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getModel.pending, (state) => {
        state.getModelLoading = true;
        state.error = null;
      })
      .addCase(getModel.fulfilled, (state, action) => {
        state.getModelLoading = false;
        const { payload } = action;
        state.tryPrompt = { ...payload, promptData: [] };
      })
      .addCase(getModel.rejected, (state, action) => {
        state.getModelLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice;
