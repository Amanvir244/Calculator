import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './reducer';

const store = configureStore({
  reducer: calculatorReducer,
});

export default store;
