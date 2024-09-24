import { TextInputProps } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textEnums } from '../text/textEnums';
import { ContainerInput } from './input.styled';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}

const Input = ({ title, errorMessage, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          color={theme.colors.grayTheme.gray100}
          type={textEnums.PARAGRAPH_SMALL_SEMI_BOLD}
        >
          {title}
        </Text>
      )}
      <ContainerInput isError={!!errorMessage} {...props} />
      {errorMessage && (
        <Text
          margin="4px 0px 0px 8px"
          type={textEnums.PARAGRAPH_SMALL_SEMI_BOLD}
          color={theme.colors.orangeTheme.orange80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
