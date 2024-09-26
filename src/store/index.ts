import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './reducer/globalReducer';
import userReducer from './reducer/userReducer';

export const store = configureStore({
  reducer: {
    userReducer,
    globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
