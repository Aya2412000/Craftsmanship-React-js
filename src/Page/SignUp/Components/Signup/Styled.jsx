import styled from "@emotion/styled";
import { theme } from "../../../../design-system/Config";
import img1 from "images/images/7.jpg";
export const SignupWrapper = styled("div")`
  label: SignupWrapper;
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
  width: 550px;
  height: 600px;
  margin: 7rem 32rem;
  background-color: #ffffff42;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: -2px 0px 8px 2px #d0cfc688;
`;
export const H1 = styled("h1")`
  label: H1;
  /* margin: 1rem 4rem; */
  margin: 2rem 0;
  text-align: center;
  color: ${theme.white};
  text-shadow: 1px 4px #d7862399;
`;
export const Input = styled("input")`
  label: Input;
  background-color: transparent;
  ::placeholder {
    color: ${theme.darkBlue};
    font-size: 1.2rem;
  }
`;
export const Select = styled("select")`
  label: Select;
  background-color: transparent;
  color: ${theme.darkBlue};
  font-size: 1rem;
  padding: 5px 50px;
  border-radius: 7px;
  border: none;
`;
export const Option = styled("option")`
  label: Option;
  background-color: ${theme.primary};
  color: ${theme.white};
  border-radius: 20px;
  font-weight: bold;
  :hover {
    background-color: ${theme.bg};
  }
`;
export const LOG = styled("button")`
  label: LOG;
  font-size: 1.5rem;
  color: ${theme.white};
  margin: 2rem 9.8rem;
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
    transform: scale(1.15);
  }
`;
export const Work = styled("div")`
  label: Work;
  max-height: 0;
  overflow: hidden;
`;
