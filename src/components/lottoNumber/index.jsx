import Button from "../ui/Button";
import styled from "styled-components";
import LottoNumberBox from "./LottoNumberBox";

const LottoNumber = ({
  inputNumberState: { inputNumbers, setInputNumbers },
}) => {
  // 로또 번호 저장
  const submitHandler = () => {
    if (Object.values(inputNumbers).length < 7) {
      alert("모든 번호를 입력해 주세요.");
      return;
    }
    const numbersSet = new Set(Object.values(inputNumbers));
    if (numbersSet.size !== Object.values(inputNumbers).length) {
      alert("중복된 번호는 입력할 수 없습니다.");
      return;
    }
    setInputNumbers(inputNumbers);
  };

  return (
    <div>
      <h3>당첨 번호 입력</h3>
      <LottoNumberBox
        inputNumbers={inputNumbers}
        setInputNumbers={setInputNumbers}
      />
      <PrizeText>
        <p>총 당첨금 : 30,000,000,000원</p>

        <Button title="번호 저장" role="submit" onClick={submitHandler} />
      </PrizeText>
    </div>
  );
};

export default LottoNumber;

const PrizeText = styled.div`
  margin-top: 40px;
  text-align: center;
`;
