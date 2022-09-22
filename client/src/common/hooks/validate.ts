
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { TSchema } from 'features/auth/models';

export type TModeInput = 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all'

export function useValidate<T>(schema:TSchema, modeInput:TModeInput){
  const {
    register,
    formState: { errors, isValid, isDirty, isValidating },
    handleSubmit,
    reset,
    setFocus,
    trigger,
  } = useForm<T>({
    resolver: yupResolver(schema),
    mode: modeInput,
  });
  return {
    handleSubmit,
    register,
    errors,
    isValid,
    isDirty,
    isValidating,
    reset,
    setFocus,
    trigger,
  };
}
