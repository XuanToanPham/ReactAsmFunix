
import { createSlice } from "@reduxjs/toolkit";
const initialNotify ={
    checkShowModalNotify : false,
    nameStaffDelete: "",
    idStaffDelete: "",
    checkDelete: false,
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
        },
        deleteHandler(state, {type, payload}){
            state.deleteHandler = payload;
        }
    }
})
const initialLoading = {
    checkLoading: false 
}
export const loading = createSlice({
    name: "loading",
    initialState: initialLoading,
    reducers:{
        loading(state){
            state.checkLoading = true
        },
        finishLoading(state){
            state.checkLoading = false
        }
    }
})
export const loadingAction = loading.actions;
export const notifyAction = notifyReducer.actions;



