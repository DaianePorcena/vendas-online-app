import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native/types';

import { ContainerText } from './text.style';
import { textEnums } from './textEnums';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({ color, type, ...props }: TextProps) => {
  const FontSize = useMemo(() => {
    switch (type) {
      case textEnums.TITLE_BOLD:
      case textEnums.TITLE_REGULAR:
      case textEnums.TITLE_LIGHT:
        return '24px';
      case textEnums.SUBTITLE_BOLD:
      case textEnums.SUBTITLE_REGULAR:
      case textEnums.SUBTITLE_LIGHT:
        return '20px';
      case textEnums.BUTTON_BOLD:
      case textEnums.BUTTON_REGULAR:
      case textEnums.BUTTON_LIGHT:
        return '18px';
      case textEnums.PARAGRAPH_BOLD:
      case textEnums.PARAGRAPH_REGULAR:
      case textEnums.PARAGRAPH_LIGHT:
        return '14px';
      case textEnums.PARAGRAPH_SMALL_BOLD:
      case textEnums.PARAGRAPH_SMALL_REGULAR:
      case textEnums.PARAGRAPH_SMALL_LIGHT:
        return '10px';
      default:
        return '14px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textEnums.TITLE_BOLD:
      case textEnums.SUBTITLE_BOLD:
      case textEnums.BUTTON_BOLD:
      case textEnums.PARAGRAPH_BOLD:
      case textEnums.PARAGRAPH_SMALL_BOLD:
        return 'Poppins-Bold';
      case textEnums.TITLE_LIGHT:
      case textEnums.SUBTITLE_LIGHT:
      case textEnums.BUTTON_LIGHT:
      case textEnums.PARAGRAPH_LIGHT:
      case textEnums.PARAGRAPH_SMALL_LIGHT:
        return 'Poppins-Light';
      case textEnums.TITLE_REGULAR:
      case textEnums.SUBTITLE_REGULAR:
      case textEnums.BUTTON_REGULAR:
      case textEnums.PARAGRAPH_REGULAR:
      case textEnums.PARAGRAPH_SMALL_REGULAR:
        return 'Poppins-Regular';

      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return <ContainerText fontFamily={fontFamily} fontSize={FontSize} color={color} {...props} />;
};

export default Text;
