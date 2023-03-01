import styled from 'styled-components';
import { color, ColorProps, typography, TypographyProps } from 'styled-system';

type TextProps = ColorProps & TypographyProps;

const Text = styled.p<TextProps>`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[4]}px;

  ${color}
  ${typography}
`;

export default Text;
