import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice.js'; // adjust the path if needed

const store = configureStore({
  reducer: {
    auth: authReducer, // this will be available as state.auth
  },
});

export default store;