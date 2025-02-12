import styled from "styled-components";
const Button = styled.button`
padding: 10px 20px;
width: 220px;
height: 44px;
background: black;
color: white;
font-size: 16px;
border-radius: 5px;
cursor: pointer;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
border: 1px solid transparent;
box-sizing: border-box;
transition: 0.5s ease-in-out background-color;

&:hover {
    background-color: #fff;
    border: 1px solid black;
    color: black;
}
transition: 0.3s ease-in-out background-color;
`;

export default Button;