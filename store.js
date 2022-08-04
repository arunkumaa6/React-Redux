import { configureStore } from '@reduxjs/toolkit';
import addFav from '../features/counter/addFav';
import counterSlice from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    fav: addFav,
  },
});
