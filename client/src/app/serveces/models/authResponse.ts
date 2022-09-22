import { IUser } from './user';

export interface IAuthResponse {
    user: IUser
    refreshToken:string
    accessToken: string
}