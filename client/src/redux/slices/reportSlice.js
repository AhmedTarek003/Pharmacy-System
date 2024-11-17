import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reports: [],
  report: null,
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    getReports: (state, action) => {
      state.reports = action.payload;
    },
    getReport: (state, action) => {
      state.report = action.payload;
    },
  },
});

const reportActions = reportSlice.actions;
const reportReducer = reportSlice.reducer;

export { reportActions, reportReducer };
