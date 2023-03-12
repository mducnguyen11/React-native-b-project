import { AxiosInstance } from 'axios';
import { IUser } from '../models/authModels';
import Services, { IApiResponse } from './index.service';

export interface IUserRegisterParams {
  name: string;
  username: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  password: string;
}

export interface ILoginParams {
  username: string;
  password: string;
}

interface ILoginResponse extends IApiResponse {
  data?: IUser;
}

class AuthenticationServices {
  public static loginApi = async ({ username, password }: ILoginParams): Promise<ILoginResponse> => {
    const response = await (Services.client as AxiosInstance).post<any>(`auth/login`, {
      username,
      password,
    });
    return response as ILoginResponse;
  };
  public static registerApi = async (user: IUserRegisterParams): Promise<ILoginResponse> => {
    const response = await (Services.client as AxiosInstance).post<any>(`auth/register`, user);
    return response as ILoginResponse;
  };
}

export default AuthenticationServices;
