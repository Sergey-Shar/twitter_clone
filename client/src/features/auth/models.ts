import Lazy from 'yup/lib/Lazy';
import { AnyObjectSchema } from 'yup';

export interface ILoginValue {
	email: string;
	password: string;
}
export interface ISignupValue {
	email: string;
	username: string;
	password: string;
}

export type TSchema = AnyObjectSchema | Lazy<any, unknown>;
