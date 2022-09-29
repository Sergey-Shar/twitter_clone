import { AxiosResponse } from 'axios';
import { ILoginValue, ISignupValue } from 'features/auth/models';

import { apiAxios } from './api';
import { IAuthResponse } from './models';

export class Auth {
  static async login(data:ILoginValue ): Promise<AxiosResponse<IAuthResponse>> {
    return apiAxios.post<IAuthResponse>('/login', {data});
  }
  static async registaration(data:ISignupValue): Promise<AxiosResponse<IAuthResponse>> {
    return apiAxios.post<IAuthResponse>('/registration', {data});
  }
  static async logout(
  ): Promise<void> {
    return apiAxios.post('/logout');
  }
}
