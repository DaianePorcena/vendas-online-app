import { Text } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { ContainerLogin } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <ContainerLogin>
      <Text>ghj</Text>
      <Input />
      <Button margin="16px" title="ENTRAR" onPress={handleOnPress} />
    </ContainerLogin>
  );
};

export default Login;
