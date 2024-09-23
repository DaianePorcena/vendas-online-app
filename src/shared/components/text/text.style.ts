import { Text } from 'react-native';
import styled from 'styled-components';

interface ContainerTextProps {
  color?: string;
  fontSize?: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}
export const ContainerText = styled(Text)<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
`;
