import styled from "styled-components";
import InputNumber from "../ui/InputNumber";
import { Fragment } from "react";

const LOTTO_NUMBER_ARR = new Array(7).fill(0);

const LottoNumberBox = ({ inputNumbers, setInputNumbers }) => {
  const numberChangeHandler = (value, index) => {
    if (value < 0 || value > 45) return;
    setInputNumbers((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <NumberList>
      {LOTTO_NUMBER_ARR.map((_, index) =>
        index === 5 ? (
          <Fragment key={index}>
            <InputNumber
              index={index}
              onChange={numberChangeHandler}
              value={inputNumbers[index] || ""}
            />
            <PlusText>+</PlusText>
          </Fragment>
        ) : (
          <InputNumber
            key={index}
            index={index}
            onChange={numberChangeHandler}
            value={inputNumbers[index] || ""}
          />
        )
      )}
    </NumberList>
  );
};

export default LottoNumberBox;

const NumberList = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1vw;
  align-items: center;
`;

const PlusText = styled.div`
  font-size: 3vw;
`;
