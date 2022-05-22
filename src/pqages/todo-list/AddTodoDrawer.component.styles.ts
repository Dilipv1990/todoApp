import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Header = styled.header`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #8c8c8c;
  }

  input {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 2px;
    vertical-align: middle;
    ::placeholder {
      font-style: italic;
    }
    border: 1px solid #eeeeee;
  }
  .MuiSelect-select.MuiSelect-outlined,
  .MuiOutlinedInput-root.MuiInputBase-root {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 2px;
    vertical-align: middle;
    ::placeholder {
      font-style: italic;
    }
    border-color: #eeeeee;

    .MuiOutlinedInput-notchedOutline {
      border: 1px solid #eeeeee;
    }

    input {
      border: none;
    }
    svg {
      fill: #8c8c8c;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 12px 0 36px 0;
  border-top: 1px solid #cccccc;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
  }
`;
