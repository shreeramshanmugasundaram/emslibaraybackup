import axios from "axios";

const API = axios.create({ baseURL: "" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("ews")) {
    req.headers.authorization = JSON.parse(localStorage.getItem("ews"));
  }
  return req;
});

export const contact = (formData) => API.post("/contact", formData);
export const email = (formData) => API.post("/email", formData);
export const getemails = () => API.get("/emails");
export const sendemail = (formData) => API.post("/sendemails", formData);
export const auth = (formData) => API.post("/auth", formData);

// shreeram
