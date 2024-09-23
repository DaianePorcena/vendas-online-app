import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { textEnums } from '../text/textEnums';
import { ButtonContainer } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <ButtonContainer {...props}>
      <Text type={textEnums.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
        {title}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
