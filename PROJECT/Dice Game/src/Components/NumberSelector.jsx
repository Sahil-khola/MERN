import React from "react";
import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const handleClick = (value) => {
    if (value !== undefined && value !== null) {
      setSelectedNumber(value);
    }
  };

  return (
   <Flex>
     <NumberContainer>
      {arrNumber.map((value, index) => (
        <Box isSelected={selectedNumber === value}  key={index} onClick={() => handleClick(value)}>
          {value}
        </Box>
        
      ))}
    </NumberContainer>
    <p>Seleted Number</p>
   </Flex>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  margin-top:70px;
`;
const NumberContainer = styled.div`
    display: flex;
    justify-content: end;
    gap: 30px;
`
const Flex = styled.div`
display: flex;
flex-direction: column;
align-items: end;
gap: 8px;
  p{
    font-size: 24px;
    font-weight: 700;
  }
`