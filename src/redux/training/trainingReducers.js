import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addTrainingResultError, addTrainingResultRequest, addTrainingResultSuccess, getTrainingError, getTrainingRequest, getTrainingResultError, getTrainingResultRequest, getTrainingResultSuccess, getTrainingSuccess } from "./trainingActions";

const training = createReducer({}, {
    [getTrainingSuccess]: (_, action) => action.payload,
    [addTrainingResultSuccess]: (state, action) =>  action.payload,
    [getTrainingResultSuccess]: (_, action) => action.payload,
})
// const result = createReducer([], {
// });
const error = createReducer("", {
    [addTrainingResultError]: (_, action) => action.payload,
    [getTrainingResultError]: (_, action) => action.payload,
    [getTrainingError]: (_, action) => action.payload,
});

const loader = createReducer(false, {
    [addTrainingResultRequest]: () => true,
    [addTrainingResultError]: () => false,
    [addTrainingResultSuccess]: () => false,
    [getTrainingResultRequest]: () => true,
    [getTrainingResultError]: () => false,
    [getTrainingResultSuccess]: () => false,
    [getTrainingRequest]: () => true,
    [getTrainingSuccess]: () => false,
    [getTrainingError]: () => false,
})

export const trainingReducer = combineReducers({
    training,
    // result,
    error,
    loader,
})