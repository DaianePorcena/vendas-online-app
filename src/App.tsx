import { SafeAreaView, Text } from 'react-native';

import { ContainerLogin } from './modules/login/styles/login.styles';
import Input from './shared/components/input/input';

const App = () => {
  return (
    <SafeAreaView>
      <ContainerLogin>
        <Text>Texto de exemplo</Text>
        <Input />
      </ContainerLogin>
    </SafeAreaView>
  );
};

export default App;
