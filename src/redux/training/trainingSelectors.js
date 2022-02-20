export const getResultSelector = (state)=> state.training.training.training.result;
export const totalPages = (state) => (state.training.training.training.totalPages);
export const pagesResultRead = (state) => (state.training.training.training.pagesResult);
export const getTotalBook = (state) =>(state.training.training.training.trainingBooks);
export const readBook = (state) =>(state.training.training.training.trainingBooks);
export const endTraining = (state) =>(state.training.training.training.endTrain);
export const startTraining = (state) =>(state.training.training.training.startTrain);
export const getTrainingBooks = (state) =>(state.training.training.books)