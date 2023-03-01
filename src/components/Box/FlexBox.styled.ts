import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import Box, { BoxProps } from './Box.styled';

type FlexBoxProps = BoxProps & FlexboxProps;

const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;
  ${flexbox}
`;

export default FlexBox;
