import logoImage from '../../../assets/images/logo.png';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
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
      <Button
        type={theme.buttons.buttonsTheme.primary}
        loading={loading}
        margin="16px"
        title="ENTRAR"
        onPress={handleOnPress}
      />
    </ContainerLogin>
  );
};

export default Login;
