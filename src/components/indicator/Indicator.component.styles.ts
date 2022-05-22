import styled from "styled-components";

export const Container = styled.div<{ type: "red" | "green" }>`
  width: 18px;
  height: 18px;
  border: 1px solid ${({ type }) => (type === "red" ? "#E1921A" : "#82A818")};
  border-radius: 50%;
  position: relative;

  :after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({ type }) => (type === "red" ? "#E1921A" : "#82A818")};
  }
`;
