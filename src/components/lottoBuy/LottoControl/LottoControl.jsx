import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/reducers/ui";
import { totalRankActions } from "../../store/reducers/totalRank";
import { lottoNumbersActions } from "../../store/reducers/lottoNumbers";
import { priceActions } from "../../store/reducers/price";

const LottoControl = () => {
  const inputNumbers = useSelector((state) => state.lottoNumbers.inputNumbers);

  const resultNumbers = useSelector(
    (state) => state.lottoNumbers.resultNumbers
  );

  const dispatch = useDispatch();

  // 순위 계산
  const totalRankCalc = () => {
    const numbers = Object.values(inputNumbers);
    const inputMainNumbers = numbers.slice(0, 6).map(Number); // 입력한 번호
    const inputBonusNumber = Number(numbers[6]);

    const results = {
      firstClass: 0,
      secondClass: 0,
      thirdClass: 0,
      fourthClass: 0,
      fifthClass: 0,
    };

    for (let i = 0; i < resultNumbers.length; i++) {
      const numbers = resultNumbers[i]; // 구매한 번호

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

    return results;
  };

  // 모달
  const modalOpenHandler = () => {
    if (Object.values(inputNumbers).length < 7) {
      alert("당첨 번호를 입력해 주세요.");
      return;
    }

    const totalRank = totalRankCalc();

    dispatch(uiActions.isShowLottoResultModalControlHandler(true));

    dispatch(totalRankActions.totalRankCalc(totalRank)); // 순위 계산
  };

  // 초기화
  const resetHandler = () => {
    dispatch(lottoNumbersActions.reset());
    dispatch(priceActions.reset());
    dispatch(totalRankActions.reset());
    dispatch(uiActions.reset());
  };
  return (
    <ResultButtonWrapper>
      <Button
        title="번호 확인"
        role="result"
        onClick={() => dispatch(uiActions.istShowHistoryControlHandler(true))}
      />
      <Button title="결과 확인" role="open" onClick={modalOpenHandler} />
      <Button title="초기화" role="reset" onClick={resetHandler} />
    </ResultButtonWrapper>
  );
};

export default LottoControl;

const ResultButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 1vw;
`;
