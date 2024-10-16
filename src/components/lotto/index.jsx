import React, { useState } from "react";
import styled from "styled-components";
import Header from "../header";
import LottoNumber from "../lottoNumber";
import LottoBuy from "../lottoBuy";

const Lotto = () => {
  const [inputNumbers, setInputNumbers] = useState({});
  const [price, setPrice] = useState("");
  const [lottoResultNumber, setLottoResultNumber] = useState([]);

  return (
    <Wrapper>
      <Header title="행운의 로또" />
      <LottoNumber inputNumberState={{ inputNumbers, setInputNumbers }} />
      <LottoBuy
        priceState={{ price, setPrice }}
        lottoResultNumberState={{ lottoResultNumber, setLottoResultNumber }}
        inputNumbersState={{ inputNumbers, setInputNumbers }}
      />
    </Wrapper>
  );
};

export default Lotto;

const Wrapper = styled.div`
  width: calc(50% - 32px);
  padding: 20px 24px 24px;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
`;
