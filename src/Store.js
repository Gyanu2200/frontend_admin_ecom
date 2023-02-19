import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/admin-user/adminUserSlice.js";

const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
  },
});

export default store;
