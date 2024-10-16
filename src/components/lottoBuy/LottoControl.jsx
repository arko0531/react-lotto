import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const LottoControl = ({
  isShowLottoControl,
  setIsShowHistoryControl,
  totalRankCalc,
  setIsOpenLottoResultModal,
  inputNumbers,
  setInputNumbers,
  setTotalRank,
  setPrice,
  setLottoResultNumber,
  setIsShowLottoControl,
}) => {
  const [winningTimer, setWinningTimer] = useState("");

  // 모달
  const modalOpenHandler = () => {
    if (Object.values(inputNumbers).length < 7) {
      alert("당첨 번호를 입력해 주세요.");
      return;
    }

    const totalRank = totalRankCalc();

    setIsOpenLottoResultModal(true);
    setTotalRank(totalRank);
  };

  // 초기화
  const resetHandler = () => {
    setPrice("");
    setIsShowLottoControl(false);
    setIsShowHistoryControl(false);
    setLottoResultNumber([]);
    setInputNumbers({});
    setIsOpenLottoResultModal(false);
    setTotalRank({
      firstClass: 0,
      secondClass: 0,
      thirdClass: 0,
      fourthClass: 0,
      fifthClass: 0,
    });
    setWinningTimer("");
  };

  // 당첨 시간 카운트
  const winningTimeCount = () => {
    const now = new Date();
    const winningTime = new Date();
    const dayOfWeek = now.getDay();

    const nextSaturday = 6 - dayOfWeek; // 토 : 6
    winningTime.setDate(now.getDate() + nextSaturday);
    winningTime.setHours(20);
    winningTime.setMinutes(35);
    winningTime.setSeconds(0);

    if (now >= winningTime) {
      // 당첨 발표 이후면 다음주로
      winningTime.setDate(winningTime.getDate() + 7);
    }

    const diff = winningTime - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setWinningTimer(`${hours}시간 ${minutes}분 ${seconds}초`);
  };

  useEffect(() => {
    let timer;

    if (isShowLottoControl) {
      winningTimeCount();
      timer = setInterval(winningTimeCount, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isShowLottoControl]);

  return (
    <>
      {isShowLottoControl && (
        <>
          <WinningTime>
            <div>당첨 번호 발표까지 남은 시간</div>
            <div>{winningTimer}</div>
          </WinningTime>

          <ResultButtonWrapper>
            <Button
              title="번호 확인"
              role="result"
              onClick={() => setIsShowHistoryControl(true)}
            />
            <Button title="결과 확인" role="open" onClick={modalOpenHandler} />
            <Button title="초기화" role="reset" onClick={resetHandler} />
          </ResultButtonWrapper>
        </>
      )}
    </>
  );
};

export default LottoControl;

const ResultButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 1vw;
`;

const WinningTime = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  div {
    margin-left: auto;
  }
`;
