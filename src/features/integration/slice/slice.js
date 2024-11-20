/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  createModelSet,
  generateSnippet,
  getAllLanguageCode,
  getAllModelSet,
  updateModelSet,
} from "../services";

const initialState = {
  modelSet: [],
  isLoading: false,
  createModelSetIsLoading: false,
  error: "",
  codeSnippet: "",
  programmingLanguages: [],
  isSnippetLoading: false,
  isLanguageCodeLoading: false,
  securityKey: "",
  isSaveKeyReminderOpen: false,
  allModelSetId: [],
};

const slice = createSlice({
  name: "integration",
  initialState,
  reducers: {
    setModelSet: (state, action) => {
      state.modelSet = action.payload;
    },
    setCodeSnippet: (state, action) => {
      state.codeSnippet = action.payload;
    },
    setSecurityKey: (state, action) => {
      state.securityKey = action.payload;
    },
    setIsSaveKeyReminderOpen: (state, action) => {
      state.isSaveKeyReminderOpen = action.payload;
    },
    resetState: (state, action) => {
      state.modelSet = [];
      state.securityKey = "";
      state.codeSnippet = "";
      state.allModelSetId = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllModelSet.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllModelSet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.modelSet = action.payload.length
          ? [
              {
                ...action.payload[0],
              },
            ]
          : [];
        state.allModelSetId = action.payload?.map(
          ({ modelSetExtId }) => modelSetExtId,
        );
      })
      .addCase(getAllModelSet.rejected, (state, action) => {
        const error = action.payload;
        state.isLoading = false;
        state.error = error;
      })
      .addCase(createModelSet.pending, (state) => {
        state.createModelSetIsLoading = true;
        state.error = null;
      })
      .addCase(createModelSet.fulfilled, (state, action) => {
        state.createModelSetIsLoading = false;
        state.modelSet = [action.payload];
      })
      .addCase(createModelSet.rejected, (state, action) => {
        state.createModelSetIsLoading = false;
        state.error = action.payload;
      })
      .addCase(updateModelSet.pending, (state) => {
        state.createModelSetIsLoading = true;
        state.error = null;
      })
      .addCase(updateModelSet.fulfilled, (state, action) => {
        state.createModelSetIsLoading = false;
        state.modelSet = [action.payload];
      })
      .addCase(updateModelSet.rejected, (state, action) => {
        state.createModelSetIsLoading = false;
        state.error = action.payload;
      })
      .addCase(generateSnippet.pending, (state) => {
        state.isSnippetLoading = true;
        state.error = null;
      })
      .addCase(generateSnippet.fulfilled, (state, action) => {
        state.isSnippetLoading = false;
        state.codeSnippet = action.payload;
      })
      .addCase(generateSnippet.rejected, (state, action) => {
        state.isSnippetLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllLanguageCode.pending, (state) => {
        state.isLanguageCodeLoading = true;
        state.error = null;
      })
      .addCase(getAllLanguageCode.fulfilled, (state, action) => {
        state.isLanguageCodeLoading = false;
        state.programmingLanguages = action.payload;
      })
      .addCase(getAllLanguageCode.rejected, (state, action) => {
        state.isLanguageCodeLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice;
