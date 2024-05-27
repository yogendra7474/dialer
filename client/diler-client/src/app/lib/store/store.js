
import { configureStore } from '@reduxjs/toolkit'
import counterReducer   from './slice/counter'



const store = configureStore({
  reducer: {
    toggle: counterReducer,
  },
});

export default store;