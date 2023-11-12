import { createSlice } from '@reduxjs/toolkit';
const dataSlice=createSlice({
    name:"data",
    initialState:{
        rawData:[],
        sortByStatusData:[],
        sortByUserData:[],
        sortByPriorityData:[],

    },
    reducers:{
        setRawData: (state, action) => {
             state.rawData=action.payload
          },
          setSortByStatusData: (state, action) => {
            return { ...state, sortByStatusData: action.payload };
          },
          setSortByUserData: (state, action) => {
            return { ...state, sortByUserData: action.payload };
          },
          setSortByPriorityData: (state, action) => {
            return { ...state, sortByPriorityData: action.payload };
          },
    }
})
export const {setRawData,setSortByStatusData,setSortByUserData,setSortByPriorityData} = dataSlice.actions
export default dataSlice.reducer;
