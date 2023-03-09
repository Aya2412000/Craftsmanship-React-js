import styled from "@emotion/styled";
import { theme } from "../../../../design-system/Config";

export const FooterWrapper = styled("div")`
  label: FooterWrapper;
  background-color: ${theme.bg};
  text-align: center;
  display: flex;
`;
export const Content = styled("div")`
  label: Content;
  padding: 1rem 0;
`;
export const Logo = styled("span")`
  label: Logo;
  font-size: 2rem;
  font-weight: bolder;
  color: ${theme.primary};
`;
export const Logo2 = styled("span")`
  label: Logo2;
  font-size: 1.7rem;
  color: ${theme.darkBlue};
`;
export const Span = styled("span")`
  label: Span;
  color: ${theme.gray};
  font-size: 1rem;
`;
