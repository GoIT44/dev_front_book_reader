const getWillRead = (state) => state.bookReducer.willRead;
console.log(getWillRead);
const getNowRead = (state) => state.bookReducer.readNow;
const getFinishRead = (state) => state.bookReducer.readFinish;
const getTraining = (state) => state.training;
const getUserTraining = (state) => state.auth.user.training;


export { getWillRead, getNowRead, getFinishRead, getTraining, getUserTraining };
