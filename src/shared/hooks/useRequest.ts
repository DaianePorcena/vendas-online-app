import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { useGlobalReducer } from '../../store/reducer/globalReducer/useGlobalReduce';
import { useUserReducer } from '../../store/reducer/userReducer/useUserReducer';
import { MenuUrl } from '../enums/MenuUrl.enum';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, {
  connectionAPIPost,
  MethodType,
} from '../functions/connection/connectionAPI';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';

interface requestProps<T> {
  url: string;
  method: MethodType;
  saveGlobal?: (object: T) => void;
  body?: unknown;
  message?: string;
}

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const request = async <T>({
    url,
    method,
    saveGlobal,
    body,
    message,
  }: requestProps<T>): Promise<T | undefined> => {
    setLoading(true);
    const returnObject = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setModal({ visible: true, title: 'Sucesso', text: message });

          return result;
        }
      })
      .catch((error: Error) => {
        setModal({ visible: true, title: 'Erro', text: error.message });
        return undefined;
      });

    setLoading(false);
    return returnObject;
  };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('http://192.168.1.2:8080/auth', body)
      .then((result) => {
        setAuthorizationToken(result.accessToken);
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

  return { authRequest, loading, errorMessage, setErrorMessage, request };
};
