/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import SkillsIcons from './skillsIcons';

const Container = styled.div` 
color:white;
box-sizing:border-box;

`;
const Categoria = styled.h2`
text-align:center;
margin-bottom:0;

`;
const IconsSkills = styled.div`
display:grid;
grid-template-columns: 30% 70% ;
justify-content:center;
align-items:center;
font-size:72px;


`;
const Description = styled.p`
font-size:1.17rem;
align-items:none;
justify-content:none;
padding-left:20px;


`;

export default function Skills() {
  return (
    <Container>
      <Categoria>
        Skills
      </Categoria>
      <IconsSkills>
        <Description>*passe o cursor do mouse no card para ler* </Description>
        <SkillsIcons />
      </IconsSkills>
    </Container>

  );
}
