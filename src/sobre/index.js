/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const Introducao = styled.div`
color: #000;
background-color:#2D3B4D;


`;
const Categoria = styled.h2`
color: white ;
font-size:24px;
text-align:center;
margin-bottom:40px;
margin-top:0;
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
const Perfil = styled.img`
width:250px;
height:250px;
border-radius:50%;
border: 5px solid #4FB3B2;
filter: blur(.1px);

`;
export default function Sobre() {
  return (
    <Introducao>
      <Categoria>
        Sobre
      </Categoria>
      <Container>
        <Perfil src="https://cdn.discordapp.com/attachments/962910949994541076/964393771624181800/277999728_722500325423212_2400233973639669092_n.webp" />
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
