import React from "react";
import ResultNumber from "../ui/ResultNumber";
import styled from "styled-components";

const LottoBuyHistoryItem = ({ resultNum }) => {
  return (
    <HistoryItem>
      {resultNum.map((num, index) => (
        <ResultNumber key={index} number={num} />
      ))}
    </HistoryItem>
  );
};
export default LottoBuyHistoryItem;

const HistoryItem = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2vw;
  align-items: center;
`;
