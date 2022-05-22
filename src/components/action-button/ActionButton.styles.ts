import { Button } from "@mui/material";
import styled from "styled-components";

export const CustomButton = styled(Button)`
  &.MuiButton-root.MuiButton-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3px 8px;
    height: 21px;
    background: var(--white);

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    color: black;
    text-transform: capitalize;

    svg {
      fill: #8c8c8c;
      width: 12px;
    }

    :hover {
      background: #dedede;
    }
  }
`;
