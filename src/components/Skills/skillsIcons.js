import { AiFillHtml5 } from 'react-icons/ai';
import {
  DiCss3, DiJavascript, DiMysql, DiReact, DiSass,
} from 'react-icons/di';
import { SiNextdotjs, SiStyledcomponents } from 'react-icons/si';
/* eslint-disable react/react-in-jsx-scope */
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
padding:0 8%;
background-color:#273342;
@media (min-width: 1024px ){
background-color:#273342;
padding:15px;
display:flex;
justify-content:center;
};

`;
export default function SkillsIcons() {
  return (
    <ContainerIcons>
      <LiIcons>
        <ItensIcons>
          <AiFillHtml5 />
        </ItensIcons>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiCss3 />
        </ItensIcons>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiJavascript />
        </ItensIcons>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiSass />
        </ItensIcons>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiReact />
        </ItensIcons>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <SiNextdotjs />
        </ItensIcons>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <DiMysql />
        </ItensIcons>
      </LiIcons>
      <LiIcons>
        <ItensIcons>
          <SiStyledcomponents />
        </ItensIcons>
      </LiIcons>
    </ContainerIcons>
  );
}
