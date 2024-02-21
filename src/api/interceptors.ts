import axios, { AxiosInterceptorOptions, CreateAxiosDefaults } from "axios";
import { getAccessToken } from "../services/auth.helper";

export const options: CreateAxiosDefaults = {
  baseURL: "http://localhost:3002/",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    // if(originalRequest)
    // throw error
  },
);

export { axiosClassic, axiosWithAuth };
