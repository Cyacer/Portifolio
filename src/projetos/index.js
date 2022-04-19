/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import ProjetosApi from './projetosApi';

const Container = styled.div` 
color:white;
background-color:#273342;
padding-top:40px;
border-radius:5%;


`;
const Categoria = styled.h2`
text-align:center;


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
