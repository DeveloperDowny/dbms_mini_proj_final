import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});
export const logIn = (formData) => API.post("/sign_in", formData);
export const signUp = (formData) => API.post("/sign_up", formData);

export const transfer = (formData) => API.post("/transfer", formData);
export const transactions = (formData) => API.post("/transactions", formData);
