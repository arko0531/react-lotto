import React from "react";
import LottoBuyHistoryItem from "./LottoBuyHistoryItem";
import { useSelector } from "react-redux";

const LottoBuyHistory = () => {
  const resultNumbers = useSelector(
    (state) => state.lottoNumbers.resultNumbers
  );

  return (
    <div>
      <h3>로또 구매 내역</h3>
      <p>- {resultNumbers.length}장 구매</p>
      <div>
        {resultNumbers.map((resultNum, index) => (
          <LottoBuyHistoryItem key={index} resultNum={resultNum} />
        ))}
      </div>
    </div>
  );
};

export default LottoBuyHistory;
