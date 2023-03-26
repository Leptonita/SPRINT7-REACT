import styled from "styled-components";
import { keyframes } from 'styled-components'

// Create the keyframes
const zoomAnim = keyframes`
  from   {opacity:0; width: 260px;}
  to {opacity:1; width: 270px;}
`;


export const DivWebPages = styled.div`
width: 270px;
border: 2px solid black;
margin: 15px 20px;
padding: 20px 30px;
border-radius: 30px;
animation: ${zoomAnim} 0.5s linear;
`;

export const DivInputBtn = styled.div`
display: flex;
align-items: center;
`;

export const Btn = styled.button`
width: 20px;
height: 20px;
font-weight: bolder;
font-size: 19px;
color: white;
background-color: orangered;
margin: 0 auto;
padding: 0;
display: inline-block;
line-height: 20px;
border: 0px solid transparent;
border-radius: 5px;
text-align: center;
`;

export const InputTxt = styled.input`
width: 35px;
border: 0px solid white;
text-align: center;
`;
