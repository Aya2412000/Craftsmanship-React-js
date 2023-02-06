import styled from "@emotion/styled";
import { theme } from "../../../../design-system/Config";

export const AboutUsWrapper = styled("div")`
  label: AboutUsWrapper;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 5rem 0 3rem 0;
  background-color: #f5f5f5;
`;
export const Aboutus = styled("h1")`
  label: Aboutus;
  color: ${theme.primary};
  font-size: 2rem;
`;
export const Text = styled("p")`
  label: Text;
  color: ${theme.black};
  font-size: 1rem;
  padding-top: 0.5rem;
`;
export const Img = styled("img")`
  label: Img;
  width: 100%;
`;
