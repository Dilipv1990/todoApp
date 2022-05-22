import { Button } from "@mui/material";
import styled from "styled-components";

export const CustomButton = styled(Button)<{
  btnType: "Primary" | "Secondary";
}>`
  &.MuiButton-root.MuiButton-contained {
    height: 30px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    text-transform: capitalize;
    box-shadow: 0px 2px 0px
      ${({ btnType }) =>
        btnType === "Primary" ? `rgba(103, 0, 167, 0.78)` : `#DEDEDE`};

    background: ${({ btnType }) =>
      btnType === "Primary" ? `var(--primary-light)` : `#EFEFEFA3`};
    color: ${({ btnType }) =>
      btnType === "Primary" ? `var(--white)` : `var(--black)`};

    :hover {
      background: ${({ btnType }) =>
        btnType === "Primary" ? `var(--primary)` : `#DEDEDEA3`};
    }

    :disabled {
      opacity: 0.78;
    }
  }
`;
