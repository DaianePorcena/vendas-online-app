import { View } from 'react-native';
import styled from 'styled-components/native';

interface DisplayProps {
  margin?: string;
}

export const DisplayFlexColumn = styled(View)<DisplayProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : '0px')};
`;
