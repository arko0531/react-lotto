import styled from "styled-components";

const InputNumber = ({ value, onChange, index }) => {
  return (
    <StyledInputNumber
      value={value}
      onChange={(e) => onChange(Number(e.target.value), index)}
    />
  );
};

export default InputNumber;

const StyledInputNumber = styled.input`
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  border: 1px solid gray;
  text-align: center;
  font-size: 3vw;
`;
