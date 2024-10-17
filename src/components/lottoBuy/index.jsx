import React, { useRef } from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import LottoBuyHistory from "./LottoBuyHistory";
import ResultModal from "../modal/ResultModal";
import LottoControlBox from "./LottoControlBox";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/reducers/ui";
import { lottoNumbersActions } from "../store/reducers/lottoNumbers";
import { priceActions } from "../store/reducers/price";

const LottoBuy = () => {
  const isShowLottoResultModalControl = useSelector(
    (state) => state.ui.isShowLottoResultModalControl
  );
  const isShowHistoryControl = useSelector(
    (state) => state.ui.isShowHistoryControl
  );
  const inputNumbersCheck = useSelector(
    (state) => state.lottoNumbers.inputNumbersCheck
  );

  const price = useSelector((state) => state.price.price);

  const dispatch = useDispatch();

  const focusRef = useRef();

  const randomNumbers = (ticketCount) => {
    const numbersSetArray = [];

    for (let i = 0; i < ticketCount; i++) {
      const numbers = new Set(); // 중복 제거

      for (let j = 0; numbers.size < 6; j++) {
        const randomNum = Math.floor(Math.random() * 45 + 1);
        numbers.add(randomNum);
      }
      numbersSetArray.push(Array.from(numbers)); // 배열 변환
    }

    return numbersSetArray;
  };

  const LottoBuyHandler = () => {
    // 번호 저장 안하면 구매 버튼 경고 뜨게 하기
    if (!inputNumbersCheck) {
      alert("저장 버튼을 눌러주세요.");
      return;
    }

    const priceNumber = Number(price);

    if (priceNumber % 1000 !== 0 || priceNumber <= 0) {
      alert("1,000원 단위로 금액을 입력해 주세요.");
      return;
    }

    const ticketCount = priceNumber / 1000;

    dispatch(uiActions.isShowLottoControlHandler(true));

    dispatch(
      lottoNumbersActions.submitResultNumberHandler(randomNumbers(ticketCount))
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") LottoBuyHandler();
  };

  return (
    <>
      <div>
        <h3>구매하기 (1장 : 1,000원)</h3>
        <BuyInputWrapper>
          <BuyInput
            placeholder="1,000원 단위로 금액을 입력해 주세요."
            value={price}
            onChange={(e) =>
              dispatch(priceActions.submitPriceHandler(e.target.value.trim()))
            }
            ref={focusRef}
            onKeyDown={handleKeyPress}
          />

          <Button title="구매" role="buy" onClick={LottoBuyHandler} />
        </BuyInputWrapper>

        <div>
          <LottoControlBox />
        </div>
      </div>
      {isShowHistoryControl && <LottoBuyHistory />}
      {isShowLottoResultModalControl && (
        <ResultModal
          onCloseModal={() =>
            dispatch(uiActions.isShowLottoResultModalControlHandler())
          }
        />
      )}
    </>
  );
};

export default LottoBuy;

const BuyInputWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 1vw;
`;

const BuyInput = styled.input`
  font-size: 14px;
  width: 30%;
  height: 36px;
  padding: 5px 20px;
  border: 1px solid gray;
  border-radius: 14px;
`;
