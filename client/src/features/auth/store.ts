import { BASE_URL } from 'app/serveces/api';
import { Auth } from 'app/serveces/auth';
import { IAuthResponse } from 'app/serveces/models';
import { IUser } from 'app/serveces/models/user';
import axios, { AxiosError } from 'axios';
import { makeAutoObservable } from 'mobx';

import { ILoginValue, ISignupValue } from './models';

export class AuthStore {
  user = {} as IUser;
  isAuth = false;
  error = '';
  pending = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setError(error: string) {
    this.error = error;
  }

  setPending(bool: boolean) {
    this.pending = bool;
  }

  async login(data: ILoginValue) {
    this.setPending(true);
    try {
      const response = await Auth.login(data);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      const e = error as AxiosError;
      this.setError(e?.message);
    } finally {
      this.setPending(false);
    }
  }

  async registration(data: ISignupValue) {
    this.setPending(true);
    try {
      const response = await Auth.registaration(data);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      const e = error as AxiosError;
      this.setError(e?.message);
    } finally {
      this.setPending(false);
    }
  }

  async logout() {
    await Auth.logout();
    localStorage.removeItem('token');
    this.setAuth(false);
    this.setUser({} as IUser);
  }

  async checkIsAuth() {
    this.setPending(true);
    try {
      const response = await axios.get<IAuthResponse>(`${BASE_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      const e = error as AxiosError;
      this.setError(e?.message);
    } finally {
      this.setPending(false);
    }
  }
}
