// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000", // Change to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Example API functions
export const getProjects = () => API.get("/projects");
export const getSkills = () => API.get("/skills");
export const sendContact = (data) => API.post("/api/contact", data);

export default API;