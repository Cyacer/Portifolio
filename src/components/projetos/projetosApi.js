/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const GithubProject = styled.div`

`;
const Container = styled.ul`
list-style:none;
display:grid;
grid-template-columns:1fr 1fr;
padding-bottom:40px;
`;
const Card = styled.li`
text-align:center;

`;
const Titulo = styled.h3`
align-items: center;

`;

const Descricao = styled.p`


`;
const SaibaMais = styled.a`
text-decoration:none;
color:white;
border: 1px solid white;
border-radius:10%;
background-color:#2D3B4D;
padding:5px;




`;
export default function ProjetosApi() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Cyacer/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <GithubProject>
      <Container>
        { repositories.map((repository) => (
          <Card>
            <Titulo>{repository.name}</Titulo>
            <Descricao>{repository.description}</Descricao>
            <SaibaMais href={repository.html_url} target="_blank" rel="noreferrer">Saiba Mais</SaibaMais>
          </Card>
        ))}
      </Container>
    </GithubProject>
  );
}