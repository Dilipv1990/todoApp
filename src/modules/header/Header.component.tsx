import { ArrowBackIosNew } from "@mui/icons-material";
import React from "react";
import Person from "../../components/person/Person.component";
import {
  AvatarContainer,
  Container,
  CustomButton,
} from "./Header.component.styles";

interface HeaderProps {
  name: string;
  onBackClick?: () => void;
}

const Header = ({ name, onBackClick }: HeaderProps) => {
  return (
    <Container>
      <CustomButton
        variant="text"
        startIcon={onBackClick && <ArrowBackIosNew />}
        onClick={onBackClick}
      >
        Home
      </CustomButton>
      <AvatarContainer>
        <p>{name}</p>
        <Person />
      </AvatarContainer>
    </Container>
  );
};

export default Header;
