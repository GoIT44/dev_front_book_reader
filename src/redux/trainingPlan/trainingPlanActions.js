import { createAction } from "@reduxjs/toolkit";

const addTrainingPlanStartDateRequest = createAction("trainingPlan/addTrainingPlanStartDateRequest");
const addTrainingPlanStartDateSuccess = createAction("trainingPlan/addTraininPlangStartDateSuccess");
const addTrainingPlanStartDateError = createAction("trainingPlan/addTrainingPlanStartDateError");

export {addTrainingPlanStartDateRequest, addTrainingPlanStartDateSuccess, addTrainingPlanStartDateError};

const addTrainingPlanEndDateRequest = createAction("trainingPlan/addTrainingPlanEndDateRequest");
const addTrainingPlanEndDateSuccess = createAction("trainingPlan/addTraininPlangEndDateSuccess");
const addTrainingPlanEndDateError = createAction("trainingPlan/addTrainingPlanEndDateError");

export {addTrainingPlanEndDateRequest, addTrainingPlanEndDateSuccess, addTrainingPlanEndDateError};

const addTrainingPlanBookRequest = createAction("trainingPlan/addTrainingPlanBookRequest");
const addTrainingPlanBookSuccess = createAction("trainingPlan/addTrainingPlanBookSuccess");
const addTrainingPlanBookError = createAction("trainingPlan/addTrainingPlanBookError");

export {addTrainingPlanBookRequest, addTrainingPlanBookSuccess, addTrainingPlanBookError};

const deleteTrainingPlanBookRequest = createAction("trainingPlan/deleteTrainingPlanBookRequest");
const deleteTrainingPlanBookSuccess = createAction("trainingPlan/deleteTrainingPlanBookSuccess");
const deleteTrainingPlanBookError = createAction("trainingPlan/deleteTrainingPlanBookError");

export {deleteTrainingPlanBookRequest, deleteTrainingPlanBookSuccess, deleteTrainingPlanBookError};