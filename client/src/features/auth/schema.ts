import { EMAIL } from 'shared/constants';
import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Необходимо вести адрес электронной почты')
    .min(3,'Минимум три символа')
    .matches(EMAIL, 'Введите корректный адрес элетронной почты'),
  password: yup
    .string()
    .required('Необходимо ввести пароль')
    .min(3,'Минимум три символа'),
});

export const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Необходимо вести адрес электронной почты')
    .min(3,'Минимум три символа')
    .matches(EMAIL, 'Введите корректный адрес элетронной почты'),
  username: yup
    .string()
    .required('Ваше имя?')
    .min(3,'Минимум три символа'),
  password: yup
    .string()
    .required('Необходимо ввести пароль')
    .min(3,'Минимум три символа'),
});
