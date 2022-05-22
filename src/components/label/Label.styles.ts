import styled from "styled-components";

export const StyledLabel = styled.span<{ type: "high" | "medium" | "low" }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px 3px;
  text-transform: capitalize;
  border-radius: 6px;
  height: 21px;

  width: fit-content;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 0.04em;

  background: ${({ type }) =>
    type === "high" ? "#FBD9E1" : type === "medium" ? "#D2FFEC" : "#E3F8FF"};
  color: ${({ type }) =>
    type === "high" ? "#E5000E" : type === "medium" ? "#1C8A34" : "#20989F"};
`;
