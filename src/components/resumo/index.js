import { SiFirefox } from 'react-icons/si';
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

import { FundoNavbar } from '../../Theme/variaveis';

const Container = styled.div`
display:flex;
justify-content: center;
align-items:center;
background:${FundoNavbar};
height:700px;
padding-top: 100px;
@media (min-width: 1024px ){
  display: flex;
  justify-content: space-around;
}
`;

const CamadaFirst = styled.div`


@media (min-width:1024px){
  border-radius: 100%;
background: #242E3B;
box-shadow:  20px 20px 29px #1f2732,
             -20px -20px 29px #293544;
width:400px;
box-sizing:border-box;
padding:10px; 
margin-top:80px;
margin-bottom:40px;
}
`;

const Icon = styled.i`
display:none;
@media (min-width:1024px){
font-size:400px;
display: flex;
color:#4FB3B2;
}
`;
const BibliografiaResumo = styled.p`
  font-size:32px;
  text-align:center;

justify-content: center;
@media (min-width:1024px){
font-size:60px;
color: white;
display:flex;
flex-direction:column;
align-items: baseline

}
`;
const Nome = styled.h2`
font-size:32px;

@media (min-width: 1024px ){
margin:0;
font-weight:400;
font-size:32px;
}
`;
const AreaProf = styled.p`

@media (min-width: 1024px ){
  margin:0;

}
`;

const LinkLinkedin = styled.a`
color:#fff;
font-size:24px;
text-decoration:none;
font-family:'Poppins', sans-serif;
font-weight:400;

margin-top:10px;
background-color:#212934;
padding:10px 60px;
border-radius:10%;
border:3px solid #344559;
`;

export default function Resumo() {
  return (

    <Container data-aos="fade-up">

      <BibliografiaResumo>
        Olá, eu sou
        <Nome>Gabriel Barreto.</Nome>
        <AreaProf>Densevolvedor Front-End</AreaProf>
        <LinkLinkedin href="https://www.linkedin.com/in/gabriel-barreto-cyacer/">Linkedin</LinkLinkedin>
      </BibliografiaResumo>
      <CamadaFirst>
        <Icon>
          <SiFirefox />
        </Icon>
      </CamadaFirst>

    </Container>
  );
}
