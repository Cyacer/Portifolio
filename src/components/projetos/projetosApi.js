/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const GithubProject = styled.div`

`;
const Container = styled.ul`
display:grid;
padding:0 10px 30px 10px;
column-gap: 20px; 
row-gap: 20px;
@media (min-width:1024px){
  list-style:none;
display:grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3,1fr );
padding-bottom:40px;
column-gap: 50px; 
row-gap: 50px;
padding:30px;
}

`;
const Card = styled.li`
  text-align:center;
  list-style:none;
  background: rgb(45,59,77);
background: -moz-linear-gradient(155deg, rgba(45,59,77,1) 60%, rgba(79,179,178,0.9920343137254902) 100%);
background: -webkit-linear-gradient(155deg, rgba(45,59,77,1) 60%, rgba(79,179,178,0.9920343137254902) 100%);
background: linear-gradient(155deg, rgba(45,59,77,1) 60%, rgba(79,179,178,0.9920343137254902) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2d3b4d",endColorstr="#4fb3b2",GradientType=1);
    border-radius:5%;
    padding-bottom: 15px;
  @media (min-width:1024px){
    background: rgb(45,59,77);
background: -moz-linear-gradient(155deg, rgba(45,59,77,1) 60%, rgba(79,179,178,0.9920343137254902) 100%);
background: -webkit-linear-gradient(155deg, rgba(45,59,77,1) 60%, rgba(79,179,178,0.9920343137254902) 100%);
background: linear-gradient(155deg, rgba(45,59,77,1) 60%, rgba(79,179,178,0.9920343137254902) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2d3b4d",endColorstr="#4fb3b2",GradientType=1);
    border-radius:5%;
    padding-bottom: 15px;
  }

`;
const Titulo = styled.h3`
@media (min-width: 1024px ){
  align-items: center;

}


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
      <Container data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="300">
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
