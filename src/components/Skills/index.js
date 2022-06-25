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
grid-template-columns: 100% ;
justify-content:center;
align-items:center;
font-size:72px;

}

`;

export default function Skills() {
  return (
    <Container id="Skills">
      <Categoria>
        Skills
      </Categoria>
      <IconsSkills>
        <SkillsIcons />
      </IconsSkills>
    </Container>

  );
}
