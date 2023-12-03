import axios, {AxiosInstance, AxiosError} from 'axios';
import {getToken} from './token';
import { StatusCodes } from 'http-status-codes';
import { AppRoute, browserHistory } from '../const';

const BACKEND_URL = 'https://14.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        browserHistory.push(AppRoute.Root);
      }

      throw error;
    }
  );
  return api;
};