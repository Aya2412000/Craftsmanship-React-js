import styled from "@emotion/styled";
import header from "images/images/1.jpg";
import { theme } from "../../../../design-system/Config";
export const HeaderWrapper = styled("div")`
  label: HeaderWrapper;
  /* height: 750px; */
  /* background: url(${header}) fixed;
  background-size: cover;
  background-repeat: no-repeat; */
  padding: 20% 0;
`;

// export const Content = styled("div")`
//   label: Content;
//   margin-left: 100px;
//   line-height: 2.5rem;
// `;
export const Title = styled("h1")`
  label: Title;
  /* font-size: 4rem; */
  color: ${theme.darkBlue};
`;
export const H2 = styled("h2")`
  label: h2;
  /* font-size: 4rem; */
  color: ${theme.primary};
`;
// export const Button = styled("div")`
//   label: Button;
//   margin-left: 100px;
// `;
export const In = styled("button")`
  label: In;
  /* font-size: 1.4rem; */
  color: ${theme.white};
  background-color: ${theme.darkBlue};
  border: 1px solid ${theme.white};
  /* padding: 1rem 3rem;
  margin-right: 2rem; */
  /* margin: 0 1rem 0 5rem; */
  border-radius: 15px;
  transition: 0.3s all;
  cursor: pointer;
  :hover {
    background-color: ${theme.primary};
  }
`;
export const Up = styled("button")`
  label: Up;
  /* font-size: 1.4rem; */
  color: ${theme.white};
  background-color: ${theme.primary};
  border: 1px solid ${theme.white};
  /* padding: 1rem 3rem;
  margin-right: 2rem; */
  /* margin: 0 5rem 0 1rem; */
  border-radius: 15px;
  transition: 0.3s all;
  cursor: pointer;
  :hover {
    border: 1px solid ${theme.black};
    background-color: ${theme.white};
    color: ${theme.primary};
  }
`;
