import React from "react";
import styled from "styled-components";

const ResultNumber = ({ number }) => {
  return <StyledResultNumber>{number}</StyledResultNumber>;
};

export default ResultNumber;

const StyledResultNumber = styled.div`
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  border: 1px solid gray;
  text-align: center;
  font-size: 3vw;
  line-height: 5vw;
`;
