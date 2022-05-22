import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { PrimaryBtn, SecondaryBtn } from "./Popup.styles";

interface PopupProps {
  text: string;
  primaryBtnName: string;
  secondaryBtnName?: string;
  primaryBtnOnClick: () => void;
  secondaryBtnOnClick?: () => void;
  handleClose?: () => void;
  open: boolean;
  title?: string;
}

const Popup = ({
  text,
  primaryBtnName,
  secondaryBtnName,
  primaryBtnOnClick,
  secondaryBtnOnClick,
  open,
  handleClose,
  title,
}: PopupProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {secondaryBtnName && (
          <SecondaryBtn onClick={secondaryBtnOnClick}>
            {secondaryBtnName}
          </SecondaryBtn>
        )}
        <PrimaryBtn onClick={primaryBtnOnClick}>{primaryBtnName}</PrimaryBtn>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
