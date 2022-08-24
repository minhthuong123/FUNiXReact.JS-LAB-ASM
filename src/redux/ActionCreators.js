import * as ActionTypes from "./ActionTypes";

import { baseUrl } from "../shared/baseUrl";

export const addstaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFSS,
  payload: { staffs },
});

export const addFeedbackForm =
  (name, doB, salaryScale, startDate, department, annualLeave, overTime) =>
  (dispatch) => {
    const newComment = {
      id: Math.trunc(Math.random() * 1000) + 1,
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId: department,
      annualLeave: annualLeave,
      overTime: overTime,
      image: "/assets/images/alberto.png",
    };
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((response) => dispatch(addstaffs(response)));
  };

export const fetchStaffs = () => (dispatch) => {
  // dispatch(staffsLoading(true));
  return fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaffs(staffs)));
};

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});

export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading());
  return fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((departments) => dispatch(addDepartments(departments)));
};
export const departmentsFailed = (errmess) => ({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload: errmess,
});

export const addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTMENTS,
  payload: departments,
});
export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING,
});
export const fetchStaffsSalary = () => (dispatch) => {
  dispatch(staffsSalaryLoading());

  return fetch(baseUrl + "staffsSalary")
    .then((response) => response.json())
    .then((staffsSalary) => dispatch(addStaffsSalary(staffsSalary)));
};

export const staffsSalaryLoading = () => ({
  type: ActionTypes.STAFFSSALARY_LOADING,
});

export const staffsSalaryFailed = (errmess) => ({
  type: ActionTypes.STAFFSSALARY_FAILED,
  payload: errmess,
});

export const addStaffsSalary = (staffsSalary) => ({
  type: ActionTypes.ADD_STAFFSSALARY,
  payload: staffsSalary,
});

// XÓA
export const deletestaffs = (staffs) => ({
  type: ActionTypes.DELETE_STAFFSS,
  payload: { staffs },
});

export const deletedstaffs = (deletedStaffs) => (dispatch) => {
  return fetch(baseUrl + `staffs/${deletedStaffs}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((staffs) => staffs.json())
    .then((staffs) => dispatch(deletestaffs(staffs)));
};
