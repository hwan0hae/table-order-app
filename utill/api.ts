import { API_URL } from 'react-native-dotenv';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IAppSignInData, IOrderData } from '../types/api';
import navigate from '../app/Navigation/RootNavigation';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});
// eslint-disable-next-line consistent-return
const getRefreshToken = async (): Promise<string | void> => {
  try {
    const {
      data: { accessToken, refreshToken },
    } = await instance.get<{
      accessToken: string;
      refreshToken: string;
    }>('/user/refreshtoken');

    AsyncStorage.setItem('accessToken', JSON.stringify(accessToken));
    AsyncStorage.setItem('refreshToken', JSON.stringify(refreshToken));
    return accessToken;
  } catch (e) {
    AsyncStorage.clear();
    navigate('SignIn');
    // 로그아웃 된 거임
  }
};

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    let token: string | null = null;

    if (config.url === '/user/refreshtoken') {
      token = await AsyncStorage.getItem('refreshToken');
    } else {
      token = await AsyncStorage.getItem('accessToken');
    }

    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`; // eslint-disable-line no-param-reassign
    }

    return config;
  }
);

instance.interceptors.response.use(
  (config: any) => {
    return config;
  },
  async (error: AxiosError<{ name: string }>) => {
    const { config, response } = error;
    if (config) {
      if (
        response?.status === 401 &&
        response?.data?.name === 'TokenExpiredError' &&
        config.url !== '/user/refreshtoken'
      ) {
        const accessToken = await getRefreshToken();

        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`; // eslint-disable-line no-param-reassign
        }

        return axios(config);
      }
    }
    // 로그인창으로 이동 onError에서
    return Promise.reject(error);
  }
);

/** signIn */
export async function signIn(data: IAppSignInData) {
  const request = await instance.post(`/user/signin`, data);
  return request.data;
}
/** auth */
export async function auth() {
  const request = await instance.post(`/user/play`);
  return request.data;
}

/** getMenu */
export async function getMenu() {
  const request = await instance.get(`/menu/list`);
  return request.data;
}

/** Order */
export async function Order(data: IOrderData) {
  const request = await instance.post(`/order/request`, data);
  return request.data;
}
