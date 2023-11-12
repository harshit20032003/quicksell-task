import { configureStore } from '@reduxjs/toolkit';
import dropDownStateReducer from './redux-slice/dropDownStateSlice'
import dataReducer from './redux-slice/dataSlice'
const store = configureStore({
  reducer: {
    dropDownState: dropDownStateReducer,
    data: dataReducer
  },
});

export default store;