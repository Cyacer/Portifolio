/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable react/react-in-jsx-scope */
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript, DiMysql, DiReact, DiSass } from 'react-icons/di';
import { SiNextdotjs, SiStyledcomponents } from 'react-icons/si';
import styled from 'styled-components';

const ContainerIcons = styled.ul`
display:grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows :1fr  1fr ;
padding-left:0;
justify-items: center;
min-height: 300px;
@media (min-width: 1024px ){
padding-left:0;
display:grid;
grid-template-columns: repeat(4, 1fr);
height:500px;
}`;
const LiIcons = styled.li`
list-style:none;
font-size:84px;
margin-top:24px;
@media (min-width: 1024px ){
padding: 10px 20%;
}

`;
const ItensIcons = styled.span`
background-color:#273342;
padding:0 20px;
border-radius: 100%;
@media (min-width: 1024px ){
background-color:#273342;
padding:25px;
display:flex;
justify-content:center;
border-radius: 100%;
};
&:hover{
  padding: 10px 25px ;
  @media (min-width: 1024px){
    padding:40px ; 
  }
}
`;
const Desc = styled.p`
  font-size: 24px;
  margin: 0;
  text-align: center;
`;
export default function SkillsIcons() {
  return (
    <ContainerIcons data-aos="zoom-in" data-aos-easing="ease-in-sine">
      <LiIcons>
        <ItensIcons>
          <AiFillHtml5 />
        </ItensIcons>
        <Desc>HTML</Desc>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiCss3 />
        </ItensIcons>
        <Desc>CSS</Desc>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiJavascript />
        </ItensIcons>
        <Desc>JAVASCRIPT</Desc>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiSass />
        </ItensIcons>
        <Desc>SASS</Desc>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiReact />
        </ItensIcons>
        <Desc>REACT</Desc>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <SiNextdotjs />
        </ItensIcons>
        <Desc>NEXT.JS</Desc>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiMysql />
        </ItensIcons>
        <Desc>MYSQL</Desc>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <SiStyledcomponents />
        </ItensIcons>
        <Desc>STYLED</Desc>
      </LiIcons>
    </ContainerIcons>
  );
}
