import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserData } from '../app/interfaces';
import { Button } from './Button';
import { InputElement } from './InputElement';

export const LoginForm = () => {
  const [user, setUser] = useState<UserData>({ username: '', password: '' });
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch({ type: 'FETCH_SESSION_TOKEN', payload: { username: user.username, password: user.password } })
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputElement
        value={user.username}
        name="username"
        label={"Username"}
        setValue={setUser}
        required
      />
      <InputElement
        value={user.password}
        name="password"
        type={"password"}
        label={"Password"}
        setValue={setUser}
        required
      />
      <Button
        primary
        type='submit'
        disabled={false}
      >
        Log in
      </Button>
    </form>
  )
};
