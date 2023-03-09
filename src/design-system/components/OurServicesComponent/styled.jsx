import styled from "@emotion/styled";
import { theme } from "../../Config";

export const OurServicesWrapper = styled("div")`
  label: OurServicesWrapper;
  width: 285px;
  text-align: center;
  /* margin: 2rem 0;
  padding: 2rem 0; */
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
