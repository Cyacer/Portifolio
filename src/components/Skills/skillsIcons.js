/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  DiCss3, DiJavascript, DiSass, DiMysql, DiReact,
} from 'react-icons/di';
import { SiNextdotjs, SiStyledcomponents } from 'react-icons/si';

const ContainerIcons = styled.ul`
padding-left:0;
display:grid;
grid-template-columns: repeat(4, 1fr);
`;
const LiIcons = styled.li`
list-style:none;
padding: 10px 20%;

`;
const ItensIcons = styled.span`
background-color:#273342;
padding:15px;
display:flex;
justify-content:center;

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
