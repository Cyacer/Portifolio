/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

import SkillsIcons from './skillsIcons';

const Container = styled.div` 
color:white;
box-sizing:border-box;
padding: 30px;

`;
const Categoria = styled.h2`
text-align:center;
margin-bottom:0;

`;
const IconsSkills = styled.div`
@media (min-width: 1024px ){  

display:grid;
grid-template-columns: 30% 70% ;
justify-content:center;
align-items:center;
font-size:72px;

}

`;
const Description = styled.p`
margin-bottom:24px;
@media (min-width: 1024px ){
font-size:1.17rem;
align-items:none;
justify-content:none;
padding-left:20px;
}
`;

export default function Skills() {
  return (
    <Container id="Skills">
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
