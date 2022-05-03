import { SiFirefox } from 'react-icons/si';
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const Container = styled.div`
display:flex;
justify-content: center;
padding-top: 50%;
padding-bottom:50%;
align-items:center;
@media (min-width: 1024px ){
  display: flex;
  justify-content: space-around;
  padding-top: 5%;
  padding-bottom:0;
}
`;

const CamadaFirst = styled.div`


@media (min-width:1024px){
  border-radius: 50px;
background: #242E3B;
box-shadow:  20px 20px 29px #1f2732,
             -20px -20px 29px #293544;
width:12.5rem;
box-sizing:border-box;
padding:10px; 
margin-top:80px;
margin-bottom:40px;
}
`;

const Icon = styled.i`
display:none;
@media (min-width:1024px){
font-size:12.5rem;
display: flex;
color:#4FB3B2;
}
`;
const BibliografiaResumo = styled.p`
  font-size:24px;
  text-align:center;

justify-content: center;
@media (min-width:1024px){
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
    <Container>

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
