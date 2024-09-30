import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import logoImage from '../../../assets/images/logo.png';
import { MethodEnum } from '../../../enums/methods.enum';
import { Imagelogo } from '../../../modules/login/styles/login.styles';
import { URL_USER } from '../../../shared/constants/urls';
import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
import { useRequest } from '../../../shared/hooks/useRequest';
import { UserType } from '../../../shared/types/userType';
import { useUserReducer } from '../../../store/reducer/userReducer/useUserReducer';
import { ContainerSplash } from '../styles/splash.style';

const TIME_SLEEP = 5000;

const Splash = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { setUser } = useUserReducer();
  useEffect(() => {
    const findUser = async (): Promise<undefined | UserType> => {
      let returnUser;
      const token = await getAuthorizationToken();
      if (token) {
        returnUser = await request<UserType>({
          url: URL_USER,
          method: MethodEnum.GET,
          saveGlobal: setUser,
        });
      }

      return returnUser;
    };
    const verifyLogin = async () => {
      const [returnUser] = await Promise.all([
        findUser(),
        new Promise<void>((r) => setTimeout(r, TIME_SLEEP)),
      ]);

      if (returnUser) {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      } else {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.LOGIN }],
        });
      }
    };
    verifyLogin();
  }, []);

  return (
    <ContainerSplash>
      <Imagelogo resizeMode="contain" source={logoImage} />
    </ContainerSplash>
  );
};

export default Splash;
