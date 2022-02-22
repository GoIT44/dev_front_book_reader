const getWillRead = state => state.willRead;
// console.log(getWillRead);
const getNowRead = state => state.readNow;
const getFinishRead = state => state.readFinish;
const getTraining = state => state.training;
const getUserTraining = state => state.auth.user.training;

export { getWillRead, getNowRead, getFinishRead, getTraining, getUserTraining };
