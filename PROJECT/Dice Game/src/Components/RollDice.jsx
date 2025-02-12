import React from "react";
import styled from "styled-components";
import { useState } from "react";
const RollDice = ({ currentDice, roleDice }) => {


  return (
    <DiceContainer>
      <div className="Dice">
        <img
          src={`/Images/dice/dice_${currentDice}.png`}
          alt=" Dice 1"
          onClick={roleDice}
        />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};
export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .Dice {
    cursor: pointer;
  }
`;
