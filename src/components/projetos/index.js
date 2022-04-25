/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

import ProjetosApi from './projetosApi';

const Container = styled.div` 
background-color:#273342;
padding-top:40px;
border-radius:5%;

@media screen and (min-width: 1024px ){


}
`;
const Categoria = styled.h2`
  text-align:center;

@media screen and (min-width: 1024px ){

}

`;

export default function Projetos() {
  return (

    <Container id="Projetos">
      <Categoria>
        Projetos
      </Categoria>
      <ProjetosApi />
    </Container>

  );
}
