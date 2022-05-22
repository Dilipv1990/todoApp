import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  padding: 18px 24px;
  background: #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: calc(100vw - 48px);
`;

export const CustomButton = styled(Button)`
  &.MuiButton-root.MuiButton-text.MuiButton-textPrimary {
    background: transparent;
    color: black;
    text-transform: capitalize;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
`;
