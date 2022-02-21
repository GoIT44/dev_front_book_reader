import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addTrainingPlanBookError, addTrainingPlanBookRequest, addTrainingPlanBookSuccess, addTrainingPlanDateError, addTrainingPlanDateRequest, addTrainingPlanDateSuccess, addTrainingPlanEndDateError, addTrainingPlanEndDateRequest, addTrainingPlanEndDateSuccess, addTrainingPlanStartDateError, addTrainingPlanStartDateRequest, addTrainingPlanStartDateSuccess, deleteTrainingPlanBookError, deleteTrainingPlanBookRequest, deleteTrainingPlanBookSuccess } from "./trainingPlanActions";

const startTrain = createReducer({}, {
    [addTrainingPlanStartDateSuccess]: (state, action) => action.payload,
});
const endTrain = createReducer({}, {
    [addTrainingPlanEndDateSuccess]: (state, action) => action.payload,
});
const book = createReducer([], {
    [addTrainingPlanBookSuccess]: (state, action) => [...state, action.payload] ,
    [deleteTrainingPlanBookSuccess]: (state, action) => state.filter((item)=>item !== action.payload),

})
const error = createReducer("", {
    [addTrainingPlanStartDateError]: (_, action) => action.payload,
    [addTrainingPlanEndDateError]: (_, action) => action.payload,
    [addTrainingPlanBookError]: (_, action) => action.payload,
    [deleteTrainingPlanBookError]: (_, action) => action.payload,
});

const loader = createReducer(false, {
    [addTrainingPlanStartDateRequest]: () => true,
    [addTrainingPlanStartDateError]: () => false,
    [addTrainingPlanStartDateSuccess]: () => false,
    [addTrainingPlanEndDateRequest]: () => true,
    [addTrainingPlanEndDateError]: () => false,
    [addTrainingPlanEndDateSuccess]: () => false,
    [addTrainingPlanBookRequest]: () => true,
    [addTrainingPlanBookError]: () => false,
    [addTrainingPlanBookSuccess]: () => false,
    [deleteTrainingPlanBookRequest]: () => true,
    [deleteTrainingPlanBookError]: () => false,
    [deleteTrainingPlanBookSuccess]: () => false,
});

export const trainingPlanReducer = combineReducers({
    startTrain,
    endTrain,
    book,
    // result,
    error,
    loader,
})