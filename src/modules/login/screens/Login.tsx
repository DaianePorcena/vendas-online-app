import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <ContainerLogin>
      <Input placeholder="Digite seu e-mail" title="E-mail:" />
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
