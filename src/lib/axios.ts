import Axios, { InternalAxiosRequestConfig } from 'axios';
import { EndPoint } from '@/const/api';
import { useToast } from '@/hooks/useToast';
import storage from '@/utils/storage';

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = storage.getToken();
  config.headers.Accept = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
};

export const axios = Axios.create({
  baseURL: EndPoint.BASE_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { openToast } = useToast();
    const message = error.response?.data?.message || error.message;
    openToast(message, 'toast-failed');
    return Promise.reject(error);
  }
);
