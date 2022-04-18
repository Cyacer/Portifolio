/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const Container = styled.div` 
color:white;

`;
const Categoria = styled.h2`
text-align:center;

`;
const Graficos = styled.div`


`;

export default function Skills() {
  return (
    <Container>
      <Categoria>
        Skills
      </Categoria>
      <Graficos>
        ç
      </Graficos>
    </Container>

  );
}
