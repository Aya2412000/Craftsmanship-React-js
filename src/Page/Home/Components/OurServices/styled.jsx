import styled from "@emotion/styled";
import { theme } from "../../../../design-system/Config";

export const OurServicesWrapper = styled("div")`
  label: OurServicesWrapper;
  padding: 3rem 0;
`;
export const Ourservices = styled("div")`
  label: Ourservices;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;
export const DivWrapper = styled("div")`
  label: DivWrapper;
  text-align: center;
  :hover {
    box-shadow: 1px 4px 6px -4px gray;
    border-radius: 15px;
    background-color: ${theme.bg};
  }
`;
export const Img = styled("img")`
  label: Img;
  border-radius: 15px;
  cursor: pointer;
  /* width: 200px; */
`;
export const Work = styled("h2")`
  label: Work;
  color: ${theme.primary};
  font-size: 1.3rem;
  padding: 1rem 0 0;
`;
export const Content = styled("div")`
  label: Content;
  padding: 2rem 0;
  text-align: center;
`;
export const Our = styled("span")`
  label: Our;
  font-size: 2rem;
  color: ${theme.black};
`;
export const Service = styled("span")`
  label: Service;
  font-size: 2rem;
  color: ${theme.primary};
`;
export const P = styled("p")`
  label: P;
  font-size: 0.9rem;
  color: ${theme.gray};
`;
