/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import ProjetosApi from './projetosApi';

const Container = styled.div` 
color:white;

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
