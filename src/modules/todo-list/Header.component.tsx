import { ReactNode } from "react";
import { Container, Icon } from "./Header.component.styles";

interface HeaderProps {
  title: string;
  afterIcon?: ReactNode;
}

const Header = ({ title, afterIcon }: HeaderProps) => (
  <Container>
    {title}
    <Icon>{afterIcon}</Icon>
  </Container>
);

export default Header;
