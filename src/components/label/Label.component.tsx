import { StyledLabel } from "./Label.styles";

interface LabelProps {
  type: "high" | "medium" | "low";
}

const Label = ({ type }: LabelProps) => (
  <StyledLabel type={type}>{type}</StyledLabel>
);

export default Label;
