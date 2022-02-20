// import { addResultError, addResultRequest, addResultSuccess, getResultError, getResultRequest, getResultSuccess } from "./resultTrainingActions"

// export const addResultOperations = (result) => async (dispatch, getState)=>{
//     dispatch(addResultRequest());
//     try {
//         // здесь будет уходить запрос на добавление в базу данных результата
//         dispatch(addResultSuccess(result))
//         // console.log(getState().resultTraining.result)
//     } catch (error) {
//         dispatch(addResultError(error.message))
//     }
// };
// export const getResultOperations = () => async (dispatch) => {
//     dispatch(getResultRequest());
//     try {
//      ///   const resultItems = await запрос на бек
//      ///dispatch(getResultSuccess(resultItems))
//     } catch (error) {
//         dispatch(getResultError(error.message))
//     }
// }
