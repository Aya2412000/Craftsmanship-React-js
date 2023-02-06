import { Button, Content, H2, HeaderWrapper, In, Title, Up } from "./styled";

export default function Header() {
  return (
    <HeaderWrapper>
      <Content>
        <Title>Professional</Title>
        <Title>Craftsmanship</Title>
        <H2> Since 1990 </H2>
      </Content>
      <Button>
        <In>SIGN IN</In>
        <Up>SIGN UP</Up>
      </Button>
    </HeaderWrapper>
  );
}
