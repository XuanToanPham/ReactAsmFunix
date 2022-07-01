
import { createSlice } from "@reduxjs/toolkit";
const initialNotify ={
    checkShowModalNotify : false,
    nameStaffDelete: "",
    idStaffDelete: "",
}


export const notifyReducer = createSlice({
    name : "notify",
    initialState: initialNotify,
    reducers : {
        ShownotifyDelete (state,{type, payload}){
            state.checkShowModalNotify = true;
            state.nameStaffDelete = payload.name;
            state.idStaffDelete = payload.id;
        },
        hideNotiFyDelete(state){
            state.checkShowModalNotify = false;
            state.nameStaffDelete = "";
            state.idStaffDelete = "";
        }
    }
})

export const notifyAction = notifyReducer.actions;



