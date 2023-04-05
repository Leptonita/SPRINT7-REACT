import styled, { css } from "styled-components";
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

//button colors
const ButtonColorCSS = css`
color: white;
background-color: #ff00ae;
&:hover {
	  background-color: #00f2ff;
    color: blueviolet
}
`;

//budget
export const DivBudgetContainer = styled.div`
width: 100vw;
display: flex;
flex-wrap: wrap;
flex: 1 1;
`;

export const DivIndentify = styled.div`
margin: 20px 0;
`;

export const DivForm = styled.div`

border: 2px dotted #bbb;
margin: 15px 20px;
padding: 20px 25px;
border-radius: 30px;
`;

export const TitleB = styled.div`
font-size: 1.2rem;
margin: 30px 0 15px 0;
font-weight: bolder;
`;

export const ButtonBudgetList = styled.button`
${ButtonColorCSS};
margin: 10px 3px;
padding: 5px 11px;
border-radius: 7px;
`;
export const StyledLink = styled(Link)`
 ${ButtonColorCSS};
text-decoration: none;
`;

export const BudgetsList = styled.div`
min-width: 570px;
font-size: 0.7rem;
border: 2px dotted #bbb;
margin: 15px 20px;
padding: 20px 25px;
border-radius: 30px;
`;

// web
const zoomAnim = keyframes`
  from   {opacity:0; width: 310px;}
  to {opacity:1; width: 330px;}
`;

export const DivWebPages = styled.div`
width: 330px;
border: 2px solid black;
margin: 15px 20px;
padding: 20px 25px;
border-radius: 30px;
animation: ${zoomAnim} 0.5s linear;
position: relative;
`;

export const SpanPrecio = styled.span`
text-shadow: 1px -1px 2px #00e2fb;
font-weight: bolder;
`;

export const DivInputBtn = styled.div`
display: flex;
align-items: center;
`;

export const BtnWebNum = styled.button`
${ButtonColorCSS};
width: 20px;
height: 20px;
font-weight: bolder;
font-size: 19px;

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

export const BtnInfo = styled.button`
width: 20px;
height: 20px;
font-weight: bold;
font-size: 16px;
color: white;
background-color: #919191;
margin: 0 7px;
padding: 0px;
display: inline-block;
line-height: 20px;
border: 0px solid transparent;
border-radius: 30px;
text-align: center;
cursor: pointer;
&:hover{
	  background-color: #b6d1d3;
    color: blueviolet
  }
`;

//Web info modal
export const DivInfo = styled.div`
position: fixed;
z-index: 10;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(114, 114, 114, 0.7);
display: ${(props) => props.isVisible ? 'flex' : 'none'};
align-items: center;
`;

export const DivInfoTxt = styled.div`
width: 400px;
height: 50px;
background-color: #e4e4eb;
border: 2px solid black;
border-radius: 10px;
padding: 10px 30px;
margin-top: 145px;
margin-left: 50px;
`;

//navigation
export const UlMenu = styled.ul`
text-decoration: none;
list-style: none;
display: flex;
align-items: center;
gap: 50px;
margin-bottom: 40px;
`;

export const LiLogo = styled.li`
font-size: 1.5rem;
font-weight: bolder;
color: #ff0073;
text-shadow: 1px -1px 2px #00e2fb;
`;

export const LiLink = styled(Link)`
font-weight: bolder;
color: #ff0073;
text-decoration: none;
}
text-shadow: 1px -1px 2px #00e2fb;
&:hover {
  color: #e5029d;
}
`;

// Create the keyframes
const wAnim = keyframes`
  from   {opacity:0; }
  to {opacity:1;}
`;

//welcome
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
