import { createSlice } from "@reduxjs/toolkit"

const intialAddDepartment = {
    departments : [],
    staffDepartment: [], 
    salary: [],
}

export const department = createSlice({
    name: "department",
    initialState: intialAddDepartment,
    reducers : {
        setDepartment(state, {type, payload}) {
            state.departments = payload
        },
        getStaffDepartment(state, {type,payload}){
            state.staffDepartment = payload
        },
        getSalary(state, {type, payload}){
            state.salary = payload
        }
    }
})

export const departmentAction = department.actions;


