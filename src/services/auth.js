import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api-br.herokuapp.com/api",
});

export const token = {
  set(token) {
    instance.defaults.headers.authorization = `Bearer ${token}`;
    console.log(instance.defaults.headers.authorization);
  },
  unset() {
    instance.defaults.headers.common["Authorisation"] = "";
  },
};
export async function onSignUp(credentials) {
  const { data } = await instance.post("/auth/register", credentials);
  return data;
}
export async function onLogIn(credentials) {
  const { data } = await instance.post("/auth/login", credentials);
  return data;
}

export async function onLogOut() {
  const { data } = await instance.get("/auth/logout");
  return data;
}
// export async function CheckedCurrentUser() {
//   const { data } = await instance.get("/auth/google-redirect");
//   return data;
// }
export async function googleAuth() {
  const { data } = await instance.get("/auth/google");
  return data;
}
