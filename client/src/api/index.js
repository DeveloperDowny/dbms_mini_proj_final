import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

export const logIn = (formData) => API.post("/account/login", formData);
export const signUp = (formData) => API.post("/account/signup", formData);
export const transfer = (formData) => API.post("/transfer", formData);
export const transactions = (formData) => API.get("/transactions", formData);
