import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import Button from "../styled/Button";
import Rule from "./Rule";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const[rules, setRules] = useState(false)
  const genrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min));
  };

  const roleDice = () => {
    const randomNumber = genrateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (!selectedNumber) return;
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + selectedNumber);
    } else setScore((prev) => prev - 2);
    setSelectedNumber(undefined);
  };
 
  return (
    <main>
      <Main>
        <TotalScore score={score} setScore={setScore} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </Main>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <Btn>
        <Button onClick={() => setScore(0)}>Reset</Button>
        <Button onClick={() => setRules(!rules)}> {rules ? 'hide': 'show'}</Button>
      </Btn>
     { rules && <Rule/>}
    </main>
  );
};

export default GamePlay;
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 100px;
`;

const Btn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin : auto
`
