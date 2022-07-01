
import { createSlice } from "@reduxjs/toolkit";
const initialNotify ={
    checkShowModalNotify : false,
    nameStaffDelete: ""
}


export const notifyReducer = createSlice({
    name : "notify",
    initialState: initialNotify,
    reducers : {
        ShownotifyDelete (state,{type, payload}){
            state.checkShowModalNotify = true;
            state.nameStaffDelete = payload;
        }
    }
})

export const notifyAction = notifyReducer.actions;



