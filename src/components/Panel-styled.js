import styled from "styled-components";
import { keyframes } from 'styled-components';

export const TitleB = styled.div`
font-size: 1.2rem;
margin: 30px 0 15px 0;
font-weight: bolder;
`;

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

export const SpanPrecio = styled.span`
text-shadow: 1px -1px 2px #00e2fb;
font-weight: bolder;
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
background-color: #ff00ae;
margin: 0 auto;
padding: 0;
display: inline-block;
line-height: 20px;
border: 0px solid transparent;
border-radius: 5px;
text-align: center;
cursor: pointer;
&:hover{
	  background-color: #00f2ff;
    color: blueviolet
  }
`;

export const InputTxt = styled.input`
width: 35px;
border: 0px solid white;
text-align: center;
`;

export const UlMenu = styled.ul`
text-decoration: none;
list-style: none;
display: flex;
align-items: center;
gap: 50px;
`;

export const LiLogo = styled.li`
font-size: 1.5rem;
font-weight: bolder;
color: #ff0073;
text-shadow: 1px -1px 2px #00e2fb;
`;

export const LiLink = styled.li`
font-weight: bolder;
color: blueviolet;
text-shadow: 1px -1px 2px #00e2fb;
&:hover {
  color: pink;
}
`;

// Create the keyframes
const wAnim = keyframes`
  from   {opacity:0; }
  to {opacity:1;}
`;

export const DivWelcome = styled.div`
width: 490px;
border: 2px solid #ff0073;
box-shadow: 2px 2px 5px #c3d7d8;
margin: 15px 0px;
padding: 20px 30px;
border-radius: 30px;
animation: ${wAnim} 0.7s linear;
`;

export const TitleW = styled.div`
font-size: 1.4rem;
margin-top: 30px;
font-weight: bolder;
color: #ff0073;
text-shadow: 1px -1px 2px #00e2fb;
animation: ${wAnim} 0.5s linear;
`;

export const BtnW = styled.button`
width: 250px;
font-size: 19px;
color: white;
background-color: #ff00ae;
margin: 10px auto;
padding: 10px;
display: inline-block;
line-height: 20px;
border: 0px solid transparent;
border-radius: 5px;
text-align: center;
cursor: pointer;
&:hover{
	  background-color: #00f2ff;
    color: blueviolet
  }
`;
