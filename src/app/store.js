import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer
  },
  informations: {
    perso: { age: "24 ans", mail: "nicolasmarmot@gmail.com" }
  }
});
