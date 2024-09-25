import React from 'react';

import logoImage from '../../../assets/images/logo.png';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin, Imagelogo } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <ContainerLogin>
      <Imagelogo resizeMode="contain" source={logoImage} />
      <Input margin="0px 0px 8px 0px" placeholder="Digite seu e-mail" title="E-mail:" />
      <Input secureTextEntry placeholder="Digite sua senha" title="Senha:" />
      <Button
        type={theme.buttons.buttonsTheme.primary}
        margin="16px"
        title="ENTRAR"
        onPress={handleOnPress}
      />
    </ContainerLogin>
  );
};

export default Login;
