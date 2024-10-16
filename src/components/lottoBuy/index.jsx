import React, { useRef, useState } from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import LottoBuyHistory from "./LottoBuyHistory";
import ResultModal from "../modal/ResultModal";
import LottoControl from "./LottoControl";

const LottoBuy = ({
  priceState: { price, setPrice },
  lottoResultNumberState: { lottoResultNumber, setLottoResultNumber },
  inputNumbersState: { inputNumbers, setInputNumbers },
}) => {
  const [isShowLottoControl, setIsShowLottoControl] = useState(false);
  const [isShowHistoryControl, setIsShowHistoryControl] = useState(false);
  const [isOpenLottoResultModal, setIsOpenLottoResultModal] = useState(false);
  const [totalRank, setTotalRank] = useState({
    firstClass: 0,
    secondClass: 0,
    thirdClass: 0,
    fourthClass: 0,
    fifthClass: 0,
  });

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
    const priceNumber = Number(price);

    if (priceNumber % 1000 !== 0 || priceNumber <= 0) {
      alert("1,000원 단위로 금액을 입력해 주세요.");
      return;
    }

    const ticketCount = priceNumber / 1000;

    setIsShowLottoControl(true);
    setLottoResultNumber(randomNumbers(ticketCount));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") LottoBuyHandler();
  };

  // 가격 변경 시
  const changePriceHandler = (event) => {
    const value = event.target.value.trim();
    setPrice(value);
  };

  // 순위 계산
  const totalRankCalc = () => {
    const numbers = Object.values(inputNumbers);
    const inputMainNumbers = numbers.slice(0, 6).map(Number); // 입력한 번호
    const inputBonusNumber = Number(numbers[6]);

    //console.log("입력한 로또 번호 : " + inputMainNumbers + " + " + inputBonusNumber); // 확인용

    const results = {
      firstClass: 0,
      secondClass: 0,
      thirdClass: 0,
      fourthClass: 0,
      fifthClass: 0,
    };

    for (let i = 0; i < lottoResultNumber.length; i++) {
      const numbers = lottoResultNumber[i]; // 구매한 번호

      //console.log("구매한 로또 번호 : " + numbers); // 확인용

      const totalCount = inputMainNumbers.filter((number) =>
        numbers.includes(number)
      ).length;

      if (totalCount === 6) {
        results.firstClass += 1;
      } else if (totalCount === 5 && numbers.includes(inputBonusNumber)) {
        results.secondClass += 1;
      } else if (totalCount === 5) {
        results.thirdClass += 1;
      } else if (totalCount === 4) {
        results.fourthClass += 1;
      } else if (totalCount === 3) {
        results.fifthClass += 1;
      }
    }
    //console.log(results); // 확인용
    return results;
  };

  return (
    <>
      <div>
        <h3>구매하기 (1장 : 1,000원)</h3>
        <BuyInputWrapper>
          <BuyInput
            placeholder="1,000원 단위로 금액을 입력해 주세요."
            value={price}
            onChange={changePriceHandler}
            ref={focusRef}
            onKeyDown={handleKeyPress}
          />

          <Button title="구매" role="buy" onClick={LottoBuyHandler} />
        </BuyInputWrapper>

        <div>
          <LottoControl
            isShowLottoControl={isShowLottoControl}
            setIsShowHistoryControl={setIsShowHistoryControl}
            totalRankCalc={totalRankCalc}
            setIsOpenLottoResultModal={setIsOpenLottoResultModal}
            inputNumbers={inputNumbers}
            setTotalRank={setTotalRank}
            setPrice={setPrice}
            setInputNumbers={setInputNumbers}
            setLottoResultNumber={setLottoResultNumber}
            setIsShowLottoControl={setIsShowLottoControl}
          />
        </div>
      </div>
      {isShowHistoryControl && (
        <LottoBuyHistory lottoResultNumber={lottoResultNumber} />
      )}
      {isOpenLottoResultModal && (
        <ResultModal
          onCloseModal={() => setIsOpenLottoResultModal(false)}
          totalRank={totalRank}
          price={price}
          ticketCount={lottoResultNumber.length}
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
