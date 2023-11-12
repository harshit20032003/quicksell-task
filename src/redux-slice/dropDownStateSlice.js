import { createSlice } from '@reduxjs/toolkit';
const dropDownStateSlice=
    createSlice(
        {
            name:"dropDownState",
            initialState:{
                orderState:localStorage.getItem("orderValue")?localStorage.getItem("orderValue"):"Priority",
                groupState:localStorage.getItem("groupValue")?localStorage.getItem("groupValue"):"Status"
            },
            reducers:{
                updateOrderState: (state,action)=>{
                    state.orderState=action.payload
                },
                updateGroupState: (state,action)=>{
                    state.groupState=action.payload
                }
            }
    
        }
    )


export const {updateGroupState,updateOrderState}=dropDownStateSlice.actions;
export default dropDownStateSlice.reducer;