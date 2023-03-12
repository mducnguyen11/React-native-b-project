import axios, { AxiosError, AxiosResponseHeaders, InternalAxiosRequestConfig } from 'axios';
import store, { RootState } from '../store';
export interface IApiResponse {
  success: boolean;
  error: boolean;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: InternalAxiosRequestConfig<any>;
}

class Services {
  private static baseLocalUrl = 'http://192.168.1.4:4007/';

  public static baseUrl = Services.baseLocalUrl;

  public static client = axios.create({
    baseURL: Services.baseUrl,
    timeout: 1000 * 10,
  });

  constructor() {
    Services.client.interceptors.request.use(
      async (config) => {
        const { auth } = store.getState() as RootState;
        const token = auth.userData?.token || null;

        const cloneConfig = { ...config };

        if (token && cloneConfig.headers) {
          cloneConfig.headers.authorization = token;
        }

        return cloneConfig;
      },
      (error) => Promise.reject(error),
    );

    Services.client.interceptors.response.use(
      (response) => {
        return {
          success: true,
          error: false,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          config: response.config,
          data: response.data,
        };
      },
      (error: AxiosError) => {
        return {
          success: false,
          error: true,
          status: error.status,
          errorMessage: error.message,
        };
      },
    );
  }
}

// eslint-disable-next-line no-new
new Services();

export default Services;
