import axios from "axios";
export const apiUrl = "http://localhost:8080/api/"
export const api = axios.create({baseURL: apiUrl})
export const endpoints = {
    register: "user/register",
    login: "user/login",
    signout: "user/signout",
    signintoken: "user/signintoken",
    tournaments: "tournaments",
}