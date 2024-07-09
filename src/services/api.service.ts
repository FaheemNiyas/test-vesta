import axios from "axios";

const authApiURL = import.meta.env.VITE_AUTH_API_URI
  ? `${import.meta.env.VITE_AUTH_API_URI}/api/v1/auth`
  : "http://localhost:3000/api/v1/auth";

const authApiURL2 = import.meta.env.VITE_AUTH_API_URI
  ? `${import.meta.env.VITE_AUTH_API_URI}/api/v1`
  : "http://localhost:3000/api/v1";

export const launchpadApiURL = import.meta.env.VITE_LAUNCHPAD_API_URI
  ? `${import.meta.env.VITE_LAUNCHPAD_API_URI}/api/v1`
  : "http://localhost:3005/api/v1";

export const authApi2 = axios.create({
  baseURL: authApiURL2,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = axios.create({
  baseURL: authApiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const launchpadApi = axios.create({
  baseURL: launchpadApiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getJwtTokenFromCookie = () => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("JwtToken="))
    ?.split("=")[1];
  return cookieValue;
};

launchpadApi.interceptors.request.use(
  (config) => {
    const jwtToken = getJwtTokenFromCookie();
    if (jwtToken) {
      config.headers["Authorization"] = `Bearer ${jwtToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
