import axios from "axios";


export const instance = axios.create({
  baseURL:""
});

export const token = {
  set(token) {
    instance.defaults.headers.authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common["Authorisation"] = "";
  },
};
export async function onSignUp(credentials) {
  const { data } = await instance.post("/auth/signup", credentials);
  return data;
}
export async function onLogIn(credentials) {
  const { data } = await instance.post("/auth/login", credentials);
  return data;
}

export async function onLogOut() {
  const { data } = await instance.post("/auth/logout");
  return data;
}
export async function CheckedCurrentUser() {
  const { data } = await instance.get("/auth/current");
  return data;
}
