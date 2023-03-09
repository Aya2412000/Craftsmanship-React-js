import styled from "@emotion/styled";
import { theme } from "../../../../design-system/Config";

export const Content = styled("div")`
  label: Content;
  padding: 1rem 0 0;
  margin: 5rem 0;
  background-color: ${theme.bg};
  text-align: center;
  border-radius: 20px 200px;
  box-shadow: 1px 5px 10px 0px #c58940;
`;

export const Aboutus = styled("h1")`
  label: Aboutus;
  color: ${theme.primary};
  font-size: 2rem;
  margin-top: 2rem;
`;
export const AboutUsWrapper = styled("div")`
  label: AboutUsWrapper;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 1rem;
  // background-color: ${theme.bg};
`;
export const Text = styled("p")`
  label: Text;
  color: ${theme.black};
  /* font-size: 1rem;
  padding-top: 0.5rem; */
`;
export const Img = styled("img")`
  label: Img;
  width: 90%;
  border-radius: 20px 200px;
`;
