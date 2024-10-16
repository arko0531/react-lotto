import React from "react";
import LottoBuyHistoryItem from "../lottoNumber/LottoBuyHistoryItem";

const LottoBuyHistory = ({ lottoResultNumber }) => {
  return (
    <div>
      <h3>로또 구매 내역</h3>
      <p>- {lottoResultNumber.length}장 구매</p>
      <div>
        {lottoResultNumber.map((resultNum, index) => (
          <LottoBuyHistoryItem key={index} resultNum={resultNum} />
        ))}
      </div>
    </div>
  );
};

export default LottoBuyHistory;
