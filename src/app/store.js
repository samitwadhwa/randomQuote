import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer'; // Assuming you have reducers

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;