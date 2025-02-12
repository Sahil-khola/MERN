import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Score>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Score>
  );
};

export default TotalScore;

const Score = styled.div`
  width: 220px;
  margin-top: 70px;
  h1 {
    font-size: 96px;
    text-align: center;
  }
  p {
    font-size: 24px;
    text-align: center;
  }
`;
