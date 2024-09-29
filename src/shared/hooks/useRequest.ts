import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { useGlobalReducer } from '../../store/reducer/globalReducer/useGlobalReduce';
import { useUserReducer } from '../../store/reducer/userReducer/useUserReducer';
import { MenuUrl } from '../enums/MenuUrl.enum';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('http://192.168.1.2:8080/auth', body)
      .then((result) => {
        setUser(result.user);
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      })
      .catch(() => {
        setModal({ visible: true, title: 'Erro', text: 'Usuário ou senha inválidos' });
      });
    setLoading(false);
  };

  return { authRequest, loading, errorMessage, setErrorMessage };
};
