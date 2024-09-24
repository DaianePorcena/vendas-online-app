import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { textEnums } from '../text/textEnums';
import { ButtonContainer, ButtonSecondary, GradientButton } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, type, ...props }: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props}>
          <Text type={textEnums.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer {...props}>
          <GradientButton
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
            start={{ x: 0.0, y: 0.2 }}
            end={{ x: 1.0, y: 1.0 }}
          >
            <Text type={textEnums.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
              {title}
            </Text>
          </GradientButton>
        </ButtonContainer>
      );
  }
};

export default Button;
