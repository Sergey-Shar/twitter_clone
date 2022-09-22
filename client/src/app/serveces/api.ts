import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = process.env.REACT_APP_BASE_URL_API;

export const apiAxios = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

apiAxios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		config!.headers!.Autorization = `Bearer ${localStorage.getItem('token')}`;
		return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
