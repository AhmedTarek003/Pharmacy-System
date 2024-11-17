import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
  notification: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    getNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    getNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

const notificationActions = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;

export { notificationActions, notificationReducer };
