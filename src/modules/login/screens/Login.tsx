import { TouchableOpacity } from 'react-native';

import logoImage from '../../../assets/images/logo.png';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/components/text/Text';
import { textEnums } from '../../../shared/components/text/textEnums';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import { ContainerLogin, Imagelogo } from '../styles/login.styles';

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleGoToCreateUser,
  } = useLogin();

  return (
    <ContainerLogin>
      <Imagelogo resizeMode="contain" source={logoImage} />
      <Input
        errorMessage={errorMessage}
        value={email}
        margin="0px 0px 8px 0px"
        placeholder="Digite seu e-mail"
        title="E-mail:"
        onChange={handleOnChangeEmail}
      />
      <Input
        errorMessage={errorMessage}
        value={password}
        secureTextEntry
        placeholder="Digite sua senha"
        title="Senha:"
        onChange={handleOnChangePassword}
      />
      <TouchableOpacity onPress={handleGoToCreateUser}>
        <Text
          margin="16px"
          type={textEnums.PARAGRAPH_SEMI_BOLD}
          color={theme.colors.mainTheme.primary}
        >
          Cadastrar Usuário
        </Text>
      </TouchableOpacity>
      <Button
        type={theme.buttons.buttonsTheme.primary}
        loading={loading}
        title="ENTRAR"
        onPress={handleOnPress}
      />
    </ContainerLogin>
  );
};

export default Login;
