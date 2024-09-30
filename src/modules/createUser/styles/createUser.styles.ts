import { ScrollView } from 'react-native';
import styled from 'styled-components';

import { theme } from '../../../shared/themes/theme';

export const CreateUserContainer = styled(ScrollView)`
  background-color: ${theme.colors.neutralTheme.white};
  padding: 16px;
`;
