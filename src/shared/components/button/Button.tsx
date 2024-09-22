import { Text, TouchableOpacityProps } from 'react-native';

import { ButtonContainer } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <ButtonContainer {...props}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
};

export default Button;
