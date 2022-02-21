import { addTrainingPlanBookError, addTrainingPlanBookRequest, addTrainingPlanBookSuccess, addTrainingPlanDateError, addTrainingPlanDateRequest, addTrainingPlanDateSuccess, addTrainingPlanEndDateError, addTrainingPlanEndDateRequest, addTrainingPlanEndDateSuccess, addTrainingPlanStartDateError, addTrainingPlanStartDateRequest, addTrainingPlanStartDateSuccess, deleteTrainingPlanBookError, deleteTrainingPlanBookRequest, deleteTrainingPlanBookSuccess } from "./trainingPlanActions";

export const addStartDateTrainingOperation = (date) => (dispatch) => {
    dispatch(addTrainingPlanStartDateRequest());
    try {
        dispatch(addTrainingPlanStartDateSuccess(date))
    } catch (error) {
        dispatch(addTrainingPlanStartDateError())
    }
}
export const addEndDateTrainingOperation = (date) => (dispatch) => {
    dispatch(addTrainingPlanEndDateRequest());
    try {
        dispatch(addTrainingPlanEndDateSuccess(date))
    } catch (error) {
        dispatch(addTrainingPlanEndDateError())
    }
}
export const addBookTrainingOperation = (book) => (dispatch) => {
    dispatch(addTrainingPlanBookRequest());
    try {
        dispatch(addTrainingPlanBookSuccess(book))
    } catch (error) {
        dispatch(addTrainingPlanBookError())
    }
}
export const deleteBookTrainingOperation = (id) => (dispatch) => {
    dispatch(deleteTrainingPlanBookRequest());
    try {
        dispatch(deleteTrainingPlanBookSuccess(id))
    } catch (error) {
        dispatch(deleteTrainingPlanBookError())
    }
}
