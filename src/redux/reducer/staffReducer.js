
import { createSlice } from "@reduxjs/toolkit";
const initialStateStaff = {
  staffs: [],
};
export const staffs = createSlice({
  name: "staff",
  initialState: initialStateStaff,
  reducers: {
    setStaff(state, { type, payload }) {
        state.staffs = payload;
    },
    selectedStaff(state, {type, payload}){
      state.staffs = payload;
    }
  },
});
const intialAddStaff = {
  checkAdd : false
}
export const checkAddStaff = createSlice({
  name: "check add",
  initialState: intialAddStaff,
  reducers: {
    susccessAdd(state, {type, payload}){
      state.checkAdd = payload;
    }
  }
})

const intialEditStaff = {
  checkEdit : false
}
export const checkEditStaff = createSlice({
  name: "check edit",
  initialState: intialEditStaff,
  reducers: {
    susccessEdit(state, {payload}){
      state.checkEdit = payload;
    }
  }
})
export const onCheckAddAction = checkAddStaff.actions;
export const staffsAction = staffs.actions;
export const onCheckEdit = checkEditStaff.actions;
