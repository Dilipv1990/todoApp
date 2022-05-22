import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #eeeeee;
`;

export const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 24px;
  background: var(--white);
  border-radius: 16px;
  max-width: calc(100vw - 40px);
  min-width: 80%;
`;

export const ListHeader = styled.div`
  padding: 16px 16px 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 32px);
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.04em;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHeaderRow = styled.tr`
  th {
    :nth-child(2) {
      max-width: 300px;
    }
    border-bottom: 1px solid #eeeeee;
    text-align: left;
    height: 24px;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
  }
`;

export const TableRow = styled.tr`
  height: 56px;
  align-items: center;
  td {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;

    :nth-child(2) {
      max-width: 300px;
    }
  }
`;
