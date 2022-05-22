import styled from "styled-components";

export const Container = styled.div<{ fullScreen?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: var(--white);
  padding: 0 16px 16px 16px;
  height: ${({ fullScreen }) => (fullScreen ? `536px` : `250px`)};
  width: ${({ fullScreen }) => (fullScreen ? `404px` : `330px`)};
`;

export const List = styled.ul<{ fullScreen?: boolean }>`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eeeeee;
  gap: ${({ fullScreen }) => (fullScreen ? "36px" : "16px")};
  padding: 0 0 16px 0;
  margin: 0;
  max-height: ${({ fullScreen }) => (fullScreen ? "360px" : "120px")};
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const TodoText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
`;

export const TodoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

export const TodoMeta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReadMoreBtn = styled.button`
  height: 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.04em;
  color: #de59ff;
  margin-top: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Profile = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const EmptyContainer = styled.div`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;

  letter-spacing: 0.04em;
`;
