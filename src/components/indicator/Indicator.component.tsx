import { Container } from "./Indicator.component.styles";

interface IndicatorProps {
  type: "green" | "red";
}
const Indicator = ({ type }: IndicatorProps) => <Container type={type} />;

export default Indicator;
