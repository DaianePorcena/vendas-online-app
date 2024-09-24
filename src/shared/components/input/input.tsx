import { useState } from 'react';
import { TextInputProps, View } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textEnums } from '../text/textEnums';
import { ContainerInput, IconEye } from './input.styled';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({ margin, title, errorMessage, secureTextEntry, ...props }: InputProps) => {
  const [currentSecure, setCurentSecure] = useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = () => {
    setCurentSecure((current) => !current);
  };
  return (
    <DisplayFlexColumn margin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          color={theme.colors.grayTheme.gray100}
          type={textEnums.PARAGRAPH_SMALL_SEMI_BOLD}
        >
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecure}
          isError={!!errorMessage}
          {...props}
        />
        {secureTextEntry && (
          <IconEye
            onPress={handleOnPressEye}
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={20}
          />
        )}
      </View>

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
