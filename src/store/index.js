import { createSlice, configureStore } from "@reduxjs/toolkit";
import {STAFFS} from "../components/Data/staffs"
import { staffs } from "../redux/reducer/staffReducer";
import {checkAddStaff, checkEditStaff} from "../redux/reducer/staffReducer"
import {department} from "../redux/reducer/departmentReducers"
import { notifyReducer } from "../redux/reducer/notifyReduces";
import { loading } from "../redux/reducer/notifyReduces";
import logger from "redux-logger"
const intialStoreName = {
  isValidName: true,
  messageErrorName: "",
  valueName: "",
};
const validateNameInput = createSlice({
  name: "validInputName",
  initialState: intialStoreName,
  reducers: {
    isValidName(state, action) {
      if (action.payload.trim() === "") {
        state.isValidName = false;
        state.messageErrorName = "Vui lòng nhập trường này";
      } else if (action.payload.trim().length < 2) {
        state.isValidName = false;
        state.messageErrorName = "Vui lòng nhập trên 2 ký tự";
      } else {
        state.isValidName = true;
        state.messageErrorName = "";
      }
      state.valueName = action.payload;
    },
    updateData (state, {type ,payload}){
      state.valueName = payload;
    }
  },
});

const intialStoreDate = {
  isValidDate: true,
  messageErrorDate: "",
  valueDate: "",
};

const validateDateInput = createSlice({
  name: "validInputDate",
  initialState: intialStoreDate,
  reducers: {
    isValidDate(state, action) {
      if (action.payload.trim() === "") {
        state.isValidDate = false;
        state.messageErrorDate = "Vui lòng nhập trường này";
      } else {
        state.isValidDate = true;
        state.messageErrorDate = "";
      }
      state.valueDate = action.payload;
    },
    updateData (state, {type ,payload}){
      state.valueDate = payload;
    }
  },
});

const intialStoreDateStart = {
  isValidDateStart: true,
  messageErrorDateStart: "",
  valueDateStart: "",
};

const validateDateStartInput = createSlice({
  name: "validInputDateStart",
  initialState: intialStoreDateStart,
  reducers: {
    isValidDateStart(state, action) {
      if (action.payload.trim() === "") {
        state.isValidDateStart = false;
        state.messageErrorDateStart = "Vui lòng nhập trường này";
      } else {
        state.isValidDateStart = true;
        state.messageErrorDateStart = "";
      }
      state.valueDateStart = action.payload;
    },
    updateData (state, {type ,payload}){
      state.valueDateStart = payload;
    }
  },
});

const intialStoreDepartment = {
  isValidDepartment: true,
  messageErrorDepartment: "",
  valueDepartment: "",
};

const validateDepartmentInput = createSlice({
  name: "validInputDepartment",
  initialState: intialStoreDepartment,
  reducers: {
    isValidDepartment(state, action) {
      if (action.payload.trim() === "") {
        state.isValidDepartment = false;
        state.messageErrorDepartment = "Vui lòng nhập trường này";
      } else {
        state.isValidDepartment = true;
        state.messageErrorDepartment = "";
      }
      state.valueDepartment = action.payload;
    },
    updateData (state, {type ,payload}){
      state.valueDepartment = payload;
    }
  },
});

const intialStoreSalary = {
  isValidSalary: true,
  messageErrorSalary: "",
  valueSalary: "",
};

const validateSalaryInput = createSlice({
  name: "validInputSalary",
  initialState: intialStoreSalary,
  reducers: {
    isValidSalary(state, action) {
      if (action.payload.trim() === "") {
        state.isValidSalary = false;
        state.messageErrorSalary = "Vui lòng nhập trường này";
      } else if (+action.payload < 1 || +action.payload > 3) {
        state.isValidSalary = false;
        state.messageErrorSalary = "Vui lòng nhập từ 1.0 -> 3.0";
      } else {
        state.isValidSalary = true;
        state.messageErrorSalary = "";
      }
      state.valueSalary = action.payload;
    },
    updateData (state, {type ,payload}){
      state.valueSalary = payload;
    }
  },
});

const intialStoreLeave = {
  isValidLeave: true,
  messageErrorLeave: "",
  valueLeave: "",
};

const validateLeaveInput = createSlice({
  name: "validInputLeave",
  initialState: intialStoreLeave,
  reducers: {
    isValidLeave(state, action) {
      if (action.payload.trim() === "") {
        state.isValidLeave = false;
        state.messageErrorLeave = "Vui lòng nhập trường này";
      } else {
        state.isValidLeave = true;
        state.messageErrorLeave = "";
      }
      state.valueLeave = action.payload;
    },
    updateData (state, {type ,payload}){
      state.valueLeave = payload;
    }
  },
});

const intialStoreOvertime = {
  isValidOvertime: true,
  messageErrorOvertime: "",
  valueOvertime: "",
};

const validateOvertimeInput = createSlice({
  name: "validInputOvertime",
  initialState: intialStoreOvertime,
  reducers: {
    isValidOvertime(state, action) {
      if (action.payload.trim() === "") {
        state.isValidOvertime = false;
        state.messageErrorOvertime = "Vui lòng nhập trường này";
      } else {
        state.isValidOvertime = true;
        state.messageErrorOvertime = "";
      }
      state.valueOvertime = action.payload;
    },
    updateData (state, {type ,payload}){
      state.valueOvertime = payload;
    }
  },
});

const intialNewStaff = {
    newStaff: STAFFS,
}

const addNewStaff = createSlice({
    name: "Add New Staff",
    initialState: intialNewStaff,
    reducers: {
        addNewStaff(state, action){
            console.log(action.payload)
            state.newStaff.push(action.payload);
        }
    }
})

const intialFormEdit  = {
  checkShowFormEdit : false,
  idEdit: "",
}

const formEdit = createSlice({
  name: "form edit",
  initialState: intialFormEdit,
  reducers:{
    getIdEdit(state, {type, payload}){
      state.idEdit = payload;
    },
    showFormEdit(state){
      state.checkShowFormEdit = true;
    },
    hideFormEdit(state){
      state.checkShowFormEdit = false;
    }
  }
})

const store = configureStore({
  reducer: {
    inputName: validateNameInput.reducer,
    inputDate: validateDateInput.reducer,
    inputDateStart: validateDateStartInput.reducer,
    inputDepartment: validateDepartmentInput.reducer,
    inputSalary: validateSalaryInput.reducer,
    inputLeave: validateLeaveInput.reducer,
    inputOvertime: validateOvertimeInput.reducer,
    addNewStaff: addNewStaff.reducer,
    staffs: staffs.reducer,
    onCheckAdd : checkAddStaff.reducer,
    department: department.reducer,
    formEdit: formEdit.reducer,
    notify: notifyReducer.reducer,
    loading: loading.reducer,
    onCheckEdit : checkEditStaff.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export const formEditAction = formEdit.actions;
export const inputNameAction = validateNameInput.actions;
export const inputDateAction = validateDateInput.actions;
export const inputDateStartAction = validateDateStartInput.actions;
export const inputDepartmentAction = validateDepartmentInput.actions;
export const inputSalaryAction = validateSalaryInput.actions;
export const inputLeaveAction = validateLeaveInput.actions;
export const inputOvertimeAction = validateOvertimeInput.actions;
export const addNewStaffAction = addNewStaff.actions;


export default store;
