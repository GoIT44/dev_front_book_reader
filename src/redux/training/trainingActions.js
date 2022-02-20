import { createAction } from "@reduxjs/toolkit";

const getTrainingRequest = createAction("training/getTrainingRequest");
const getTrainingSuccess = createAction("training/getTrainingSuccess");
const getTrainingError = createAction("training/getTrainingError");

export {getTrainingRequest, getTrainingSuccess, getTrainingError};


const addTrainingRequest = createAction("training/addTrainingRequest");
const addTrainingSuccess = createAction("training/addTrainingSuccess");
const addTrainingError = createAction("training/addTrainingError");

export {addTrainingRequest, addTrainingSuccess, addTrainingError};

const addTrainingResultRequest = createAction("training/addTrainingResultRequest");
const addTrainingResultSuccess = createAction("training/addTrainingResultSuccess");
const addTrainingResultError = createAction("training/addTrainingResultError");

export {addTrainingResultRequest, addTrainingResultSuccess, addTrainingResultError};

const getTrainingResultRequest = createAction("training/getTrainingResultRequest");
const getTrainingResultSuccess = createAction("training/getTrainingResultSuccess");
const getTrainingResultError = createAction("training/getTrainingResultError");

export {getTrainingResultRequest, getTrainingResultSuccess, getTrainingResultError};