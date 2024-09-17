import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  color: blue;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Testandoooooo!!!</Text>
      <TextNew>Novo Texto</TextNew>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

export default App;
