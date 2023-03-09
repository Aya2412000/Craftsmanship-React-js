import { MadeBy } from "../../../../design-system/Config";
import { Content, FooterWrapper, Logo, Logo2, Span } from "./Styled";
export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <Content>
          <div style={{ margin: "1rem 0" }}>
            <Logo id="logo">حِــ</Logo>
            <Logo2 id="logo2">رفة</Logo2>
          </div>
          <Span>
            01030376458 Copyright &copy; 2023 Your Company |Design: {MadeBy}.
          </Span>
        </Content>
      </div>
    </FooterWrapper>
  );
}
