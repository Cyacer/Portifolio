/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const Introducao = styled.div`
color: #000;

`;
const Categoria = styled.h3`
color: white ;
font-size:24px;
text-align:center;
`;

export default function Sobre() {
  return (
    <Introducao>
      <Categoria>
        Sobre
      </Categoria>
    </Introducao>
  );
}
