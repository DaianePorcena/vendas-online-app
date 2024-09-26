import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

import { useRequest } from '../../../shared/hooks/useRequest';

export const useLogin = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { authRequest, errorMessage, setErrorMessage, loading } = useRequest();

  console.log('user', user);
  const handleOnPress = async () => {
    authRequest({
      email,
      password,
    });
  };

  const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };
  const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
};
