import axios from "axios";

axios.defaults.baseURL = 'https://api-br.herokuapp.com/api';
axios.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGVkMGYxNjM0ZTE0ZDVjZjgxOGMyOCIsImlhdCI6MTY0NTM1NDgzNCwiZXhwIjoxNjQ1MzkwODM0fQ.enPggKiWbFIjzMZVXQszrtgpYXFmBT7YE9RkAG8U2hY`;

export async function getCurrentTraining() {
    const { data } = await axios.get("/training");
    // console.log(data.data.training)
    // if (!data.data.training) return
    return data.data;
  }
export async function addResultTraining(result) {
    const { data } = await axios.post("/training/addresult",result);
    // console.log(data.data.training)
    // if (!data.data.training) return
    return data.data;
  }