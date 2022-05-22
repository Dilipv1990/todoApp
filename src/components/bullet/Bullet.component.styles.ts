import styled from "styled-components";

export const Container = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid var(--primary-light);
  border-radius: 2px;
  position: relative;

  :after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary);
  }
`;
