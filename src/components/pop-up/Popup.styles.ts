import { Button, Dialog } from "@mui/material";
import styled from "styled-components";

const ActionBtn = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  height: 31px;
  border-radius: 8px;

  font-family: "Untitled Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

export const PrimaryBtn = styled(ActionBtn)`
  background: rgba(158, 0, 255, 0.78);
  box-shadow: 0px 2px 0px rgba(103, 0, 167, 0.78);
  color: var(--white);
`;

export const SecondaryBtn = styled(ActionBtn)`
  background: #eeeeee;
  box-shadow: 0px 2px 0px #dedede;
  color: #111111;
`;

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background: red;
  }
`;
