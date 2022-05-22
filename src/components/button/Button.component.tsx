import { ButtonProps } from "@mui/material/Button";
import { CustomButton } from "./Button.style";

interface CustomButtonProps extends ButtonProps {
  btnType: "Primary" | "Secondary";
}

const Button = ({ btnType, ...props }: CustomButtonProps) => (
  <CustomButton btnType={btnType} {...props} variant="contained" />
);

export default Button;
