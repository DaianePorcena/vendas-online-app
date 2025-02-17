import { Image } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../shared/themes/theme';

export const ContainerLogin = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.neutralTheme.white};
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Imagelogo = styled(Image)`
  width: 250px;
  height: 250px;
`;
