import { PersonOutline } from "@mui/icons-material";
import { Container } from "./Person.styles";

interface PersonProps {
  imagePath?: string;
}

const Person = ({ imagePath }: PersonProps) => (
  <Container>
    {imagePath ? (
      <img src={imagePath} alt="profile iamge" />
    ) : (
      <PersonOutline />
    )}
  </Container>
);

export default Person;
