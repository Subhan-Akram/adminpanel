import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  text: "",
  alertType: "",
  isAlert: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    triggerAlert: (state, action) => {
      const { title, text, alertType } = action.payload;
      state.isAlert = true;
      state.title = title;
      state.text = text;
      state.alertType = alertType;
    },

    removeAlert: (state, action) => {
      state.isAlert = false;
      // return initialState;
    },
  },
});
export const { removeAlert, triggerAlert } = alertSlice.actions;
export default alertSlice.reducer;
