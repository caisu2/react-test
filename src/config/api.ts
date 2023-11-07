import axios, { AxiosInstance, AxiosResponse } from "axios";

const globalApi = () => {
  const apiConfig: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  apiConfig.interceptors.response.use(
    (response) => {
      const modifiedResponse = {
        status: response.status,
        data: response.data,
      };

      return modifiedResponse as AxiosResponse;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return apiConfig;
};

export default globalApi;
