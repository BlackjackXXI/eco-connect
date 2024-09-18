import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Example slice for managing user state

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here
  },
});

export default store;
