import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const LottoWinningTime = () => {
  const [winningTimer, setWinningTimer] = useState("");

  const isShowLottoControl = useSelector(
    (state) => state.ui.isShowLottoControl
  );

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
      setWinningTimer("");
    };
  }, [isShowLottoControl]);

  return (
    <WinningTime>
      <div>당첨 번호 발표까지 남은 시간</div>
      <div>{winningTimer}</div>
    </WinningTime>
  );
};

export default LottoWinningTime;

const WinningTime = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  div {
    margin-left: auto;
  }
`;
