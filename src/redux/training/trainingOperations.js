import { addResultTraining, getCurrentTraining } from "../../services/training";
import { addTrainingBookRequest, addTrainingBookSuccess, addTrainingDateError, addTrainingDateRequest, addTrainingDateSuccess, addTrainingResultError, addTrainingResultRequest, addTrainingResultSuccess, getTrainingError, getTrainingRequest, getTrainingResultError, getTrainingResultRequest, getTrainingResultSuccess, getTrainingSuccess } from "./trainingActions";


export const getTrainingOperations = () => async (dispatch) => {
    dispatch(getTrainingRequest());
    try {
        const training = await getCurrentTraining()
        console.log(training)
        dispatch(getTrainingSuccess(training))
    } catch (error) {
        dispatch(getTrainingError())
    }
}

export const addResultOperations = (result) => async (dispatch, getState)=>{
    dispatch(addTrainingResultRequest());
    try {
        const resultPageRead = await addResultTraining(result)
        // здесь будет уходить запрос на добавление в базу данных результата
        dispatch(addTrainingResultSuccess(resultPageRead))
        // console.log(getState().resultTraining.result)
    } catch (error) {
        dispatch(addTrainingResultError(error.message))
    }
};
export const getResultOperations = () => async (dispatch) => {
    dispatch(getTrainingResultRequest());
    try {
     const resultItems = await getCurrentTraining();
     dispatch(getTrainingResultSuccess(resultItems))
    } catch (error) {
        dispatch(getTrainingResultError(error.message))
    }
}