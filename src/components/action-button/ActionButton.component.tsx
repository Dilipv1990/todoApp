import { Mode } from "@mui/icons-material";
import { ButtonProps } from "@mui/material";
import { CustomButton } from "./ActionButton.styles";

interface ActionButtonProps extends ButtonProps {}

const ActionButton = (props: ActionButtonProps) => (
  <CustomButton {...props} endIcon={<Mode />} />
);

export default ActionButton;
