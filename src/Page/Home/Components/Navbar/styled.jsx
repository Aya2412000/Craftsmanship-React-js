import styled from "@emotion/styled";
import { theme } from "../../../../design-system/Config";
export const Navbarwrapper = styled("section")`
  label: Navbarwrapper;
  padding: 1.5rem 0;
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: #16162540;
`;
export const Navcontent = styled("div")`
  label: Navcontent;
  display: flex;

  align-items: center;
  justify-content: space-between;
`;
export const Navtitle = styled("span")`
  label: Navtitle;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.primary};
`;
export const Herfa = styled("span")`
  label: Herfa;
  font-size: 1.7rem;
  color: ${theme.white};
`;
export const LinkWrapper = styled("div")`
  label: LinkWrapper;
  display: flex;
  gap: 3rem;
  align-items: center;
`;
export const Link = styled("a")`
  label: Link;
  font-size: 1.5rem;
  color: ${theme.white};
  text-decoration: none;
  padding: 6px 12px;
  transition: 0.3s all;
  :hover {
    color: ${theme.darkBlue};
    border: 1px solid #0101244a;
    background-color: #dfdfe047;
    border-radius: 5px;
  }
`;
