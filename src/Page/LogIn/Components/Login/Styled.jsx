import styled from "@emotion/styled";
import { theme } from "../../../../design-system/Config";
import img1 from "images/Our Services/carpenter.jpg";
// OR lamp.jpg background
export const LoginWrapper = styled("div")`
  label: LoginWrapper;
  width: 100%;
  height: 200vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${img1}) fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Content = styled("div")`
  label: Content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 450px;
  height: 500px;
  margin: 10rem 26rem;
  background-color: #ffffff42; /* #ffffff42 */
  padding: 2rem;
  border-radius: 20px;
  box-shadow: -2px 0px 8px 2px #8080808a;
`;
export const H1 = styled("h1")`
  label: H1;
  /* margin: 0 7rem; */
  color: ${theme.white};
  text-align: center;
  text-shadow: 1px 4px #d7862399;
`;

export const Input = styled("input")`
  label: Input;
  border: 1px solid ${theme.white};
  outline: none;
  stroke: none;
  padding: 6px 12px;
  background-color: transparent;
  margin: 0 auto;
  border-radius: 5px;
  color: ${theme.primary};
  ::placeholder {
    color: ${theme.darkBlue};
    font-size: 1.2rem;
  }
`;
export const Check = styled("div")`
  label: Check;
  color: ${theme.darkBlue};
  font-size: 1rem;
  font-weight: 600;
`;
export const LOG = styled("button")`
  label: LOG;
  font-size: 1.5rem;
  color: ${theme.white};
  /* margin: 0 8rem; */
  // width: 50%;
  margin: 0 5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 25px;
  transition: 0.3s all;
  background-color: ${theme.primary};
  cursor: pointer;
  :hover {
    background-color: ${theme.darkBlue};
    color: ${theme.white};
    border: 1px solid ${theme.white};
    // transform: scale(1.15);
  }
`;
export const ImgWrapper = styled("div")`
  label: Img;
  text-align: center;
  padding: 3rem 0;
`;
