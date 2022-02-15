import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addResultError, addResultRequest, addResultSuccess, getResultError, getResultRequest, getResultSuccess } from "./resultTrainingActions";

const result = createReducer([], {
    [addResultSuccess]: (state, action) =>  ([...state, action.payload]),
    [getResultSuccess]: (_, action) => action.payload,
});
const error = createReducer("", {
    [addResultError]: (_, action) => action.payload,
    [getResultError]: (_, action) => action.payload,
});

const loader = createReducer(false, {
    [addResultRequest]: () => true,
    [addResultError]: () => false,
    [addResultSuccess]: () => false,
    [getResultRequest]: () => true,
    [getResultError]: () => false,
    [getResultSuccess]: () => false,
})

export const resultReducer = combineReducers({
    result,
    error,
    loader,
})