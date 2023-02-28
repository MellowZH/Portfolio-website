import styled from 'styled-components';
import {
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export type BoxProps = LayoutProps & PositionProps & SpaceProps & TypographyProps;

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${position}
  ${typography}
`;

export default Box;
