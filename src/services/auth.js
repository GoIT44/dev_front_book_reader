import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api-br.herokuapp.com/api",
});

// export const token = {
//   set(token) {
//     localStorage.setItem("token", token);
//     instance.defaults.headers.authorization = `Bearer ${token}`;
//   },
//   unset() {
//     localStorage.removeItem("token");
//     instance.defaults.headers.common["Authorization"] = "";
//   },
// };

export const token = {
  set(token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = " ";
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

export async function onGoogleIn(token) {
  const { data } = await instance.get(`/auth/google-auth?token=${token}`);
  return data;
}
