import React from 'react'
import styled from 'styled-components'

const Rule = () => {
  return (
    <RuleContainer>
      <div className='text'>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on dice if seleted number is equal  to dice number then you win</p>
      <p>if you get wrong guess then 2 point will be deducted</p>
      </div>
    </RuleContainer>
  )
}

export default Rule
const RuleContainer = styled.div`
background-color: #f7c8c8;
padding: 20px;
h2{
  font-size: 24px;
}
max-width: 800px;
margin: 0 auto;
margin-top: 20px;
border-radius: 10px;
`

