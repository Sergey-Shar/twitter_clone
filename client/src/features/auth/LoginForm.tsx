import { Context } from 'app/context';
import { Form } from 'common/ui';
import { FormInput } from 'common/ui';
import debounce from 'debounce';
import { useValidate } from 'common/hooks';
import { FC, useContext, useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { ILoginValue } from './models';
import { loginValidationSchema } from './schema';
import { IconPassword } from './IconPass';

export const LoginForm: FC = () => {
  const { authStore } = useContext(Context);
  const [showPass, setShowPass] = useState(true);


  const { handleSubmit, register, errors, isValid, reset, trigger } =
		useValidate<ILoginValue>(loginValidationSchema, 'onBlur');

  const onLogin:SubmitHandler<ILoginValue> = (data) => {
    authStore.login(data);
    reset();
  };

  return (
    <Form
      endpoint="login"
      onSubmit={handleSubmit(onLogin)}
      title="Вход"
      textBtn="Далее">
      <FormInput
        label="Эл.почта"
        errorMessge={errors?.email?.message}
        placeholder="Эл. почта"
        type="email"
        isError={!!errors?.email}
        aria-invalid={errors.email ? 'true' : 'false'}
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
        aria-invalid={errors.password ? 'true' : 'false'}
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
