/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { SiFirefox } from 'react-icons/si';

const Container = styled.div`
display:flex;
justify-content: space-around;
`;

const CamadaFirst = styled.div`
border-radius: 50px;
background: #242E3B;
box-shadow:  20px 20px 29px #1f2732,
             -20px -20px 29px #293544;
width:12.5rem;
box-sizing:border-box;
padding:10px; 
margin-top:40px;
margin-bottom:40px;

`;

const Icon = styled.i`
font-size:12.5rem;
display: flex;
color:#4FB3B2;

`;
const BibliografiaResumo = styled.p`
color: white;
display:flex;
flex-direction:column;
justify-content: center;

`;
const Nome = styled.h2`
margin:0;
font-family:'Poppins', sans-serif;
font-weight:400;
font-size:32px;
`;
const AreaProf = styled.p`
margin:0;
`;

export default function Resumo() {
  return (
    <Container>

      <BibliografiaResumo>
        Olá, eu sou
        <Nome>Gabriel Barreto.</Nome>
        <AreaProf>Densevolvedor Front-End</AreaProf>
      </BibliografiaResumo>
      <CamadaFirst>
        <Icon>
          <SiFirefox />
        </Icon>
      </CamadaFirst>

    </Container>
  );
}
