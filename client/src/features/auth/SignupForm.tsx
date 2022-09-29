import { Context } from 'app/context';
import { Form } from 'shared/ui';
import { FormInput } from 'shared/ui';
import { useValidate } from 'shared/hooks';
import { FC, useContext, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import debounce from 'debounce';

import { ISignupValue } from './models';
import { signupValidationSchema } from './schema';
import { IconPassword } from './IconPass';

export const SignupForm: FC = () => {
  const { authStore } = useContext(Context);
  const [showPass, setShowPass] = useState(true);

  const { handleSubmit, register, errors, reset, isValid, trigger } =
		useValidate<ISignupValue>(signupValidationSchema, 'onBlur');

  const onRegistration: SubmitHandler<ISignupValue> = (data) => {
    authStore.registration(data);
    reset();
  };

  return (
    <Form
      onSubmit={handleSubmit(onRegistration)}
      endpoint="registration"
      textBtn="Продолжить"
      title={'Создайте учетную запись'}
      disabled={!isValid}>
      <FormInput
        label="Имя"
        errorMessge={errors?.username?.message}
        placeholder="Имя"
        type="text"
        isError={!!errors?.username}
        register={register('username', {
          onChange: debounce(async () => await trigger('username'), 500),
        })}
      />
      <FormInput
        label="Эл.почта"
        errorMessge={errors?.email?.message}
        placeholder="Эл. почта"
        type="email"
        isError={!!errors?.email}
        register={register('email', {
          onChange: debounce(async () => await trigger('email'), 500),
        })}
      />
      <FormInput
        label="Пароль"
        errorMessge={errors?.password?.message}
        placeholder="Пароль"
        type={showPass ? 'password' : 'text'}
        isError={!!errors?.password}
        register={register('password', {
          onChange: debounce(async () => await trigger('password'), 500),
        })}>
        <IconPassword
          showPass={showPass}
          onClick={() => setShowPass(!showPass)}
        />
      </FormInput>
    </Form>
  );
};
