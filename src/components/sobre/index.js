/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';

import Contatos from './contatos';

const Introducao = styled.div`
color: #000;
background-color:#2D3B4D;


`;
const Categoria = styled.h2`
color: white ;
font-size:24px;
text-align:center;
margin-bottom:40px;
margin-top:40px;

`;
const Container = styled.div`
color:white;
display:flex;
justify-content:space-evenly;
margin-bottom:40px;
box-sizing:content-box;

`;
const Titulo = styled.h3`

`;
const Descricao = styled.p` 
font-weight:400;
max-width:300px;

`;

export default function Sobre() {
  return (
    <Introducao id="Sobre">
      <Categoria>
        Sobre
      </Categoria>
      <Container>
        <Contatos />
        <Titulo>
          Conheça um pouco de sobre mim
          <Descricao>
            Meu nome é Gabriel Barreto, ou "Cyacer", me chame como preferir.
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
