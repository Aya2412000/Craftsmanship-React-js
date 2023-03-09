import styled from "@emotion/styled";
import img1 from "images/images/9.jpg";
import { theme } from "../../../design-system/Config";
// start style {parent} body ,page background 
export const ContactUsWrapper = styled("div")`
  label: ContactUsWrapper;
  width: 100%;
  height: 200vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${img1}) fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`;
// start style of page content .
export const Wrapper = styled("div")`
  label: Wrapper;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 130px;
`;
export const Content = styled("div")`
  label: Content;
  width: 550px;
  height: 600px;
  background-color: #ffffff42;
  margin: 0 auto ;
  border-radius: 30px;
  box-shadow: 1px 2px gray;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const H1 = styled("h1")`
  label: H1;
  color: ${theme.white};
  /* margin: 1rem 10rem; */
  text-align: center;
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
export const Textarea = styled("textarea")`
  label: Textarea;
  height: 150px;
  background-color: transparent;
  ::placeholder {
    color: ${theme.darkBlue};
    font-size: 1.2rem;
  }
`;
export const Send = styled("button")`
  label: Send;
  font-size: 1.5rem;
  color: ${theme.white};
  margin: 0 7rem;
  padding: 0.5rem 7rem;
  border: none;
  /* border-radius: 25px; */
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
export const Social = styled("div")`
  label: Social;
  color: ${theme.white};
  font-size: 1.5rem;
  padding: 3rem;
  box-shadow: 1px 2px gray;
`;
export const Icon = styled("div")`
  label: Icon;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;
export const A = styled("a")`
  label: A;
  color: ${theme.white};
  font-size: 1.2rem;
  text-decoration: none;
`;

 

