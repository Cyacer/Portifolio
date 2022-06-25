/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';

import Contatos from './contatos';

const Introducao = styled.div`
color: #000;
background-color:#2D3B4D;
padding:30px;

`;
const Categoria = styled.h2`
margin-bottom:40px;
text-align:center;
color:white;
@media (min-width:1024px){
color: white ;
font-size:24px;
margin-top:40px;
}

`;
const Container = styled.div`
box-sizing:border-box;
display:flex;
flex-direction:column;
text-align: center;
align-items: center;
color:white;
@media (min-width:1024px){
color:white;
display:flex;
flex-direction:row;
justify-content:space-evenly;
margin-bottom:40px;
box-sizing:content-box;
}
`;
const Titulo = styled.h3`

`;
const Descricao = styled.p` 
font-weight:400;
@media (min-width:1024px){
  max-width:300px;
}
`;

export default function Sobre() {
  return (
    <Introducao id="Sobre" data-aos="zoom-in" data-aos-duration="3000">
      <Categoria>
        Sobre
      </Categoria>
      <Container>
        <Contatos />
        <Titulo>
          Conheça um pouco de sobre mim
          <Descricao>
            Meu nome é Gabriel Barreto.
            {' '}
            <p>
              Sou desenvolvedor
              {' '}
              <b>Front-End</b>
              , com um ano de gestão de
              {' '}
              <b>banco de dados</b>
              {' '}
              MySql.
            </p>
          </Descricao>
        </Titulo>
      </Container>
    </Introducao>
  );
}
