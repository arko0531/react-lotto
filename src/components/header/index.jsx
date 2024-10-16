import React from "react";
import styled from "styled-components";

const Header = ({ title }) => {
  return <Title>{title}</Title>;
};

export default Header;

const Title = styled.h1`
  text-align: center;
`;
