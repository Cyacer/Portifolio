import { SiFirefox } from 'react-icons/si';
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const Container = styled.div`
display:flex;
justify-content: space-around;

@media screen and (min-width: 1024px ){

}
`;

const CamadaFirst = styled.div`


@media screen and (min-width: 1024px ){
  border-radius: 50px;
background: #242E3B;
box-shadow:  20px 20px 29px #1f2732,
             -20px -20px 29px #293544;
width:12.5rem;
box-sizing:border-box;
padding:10px; 
margin-top:40px;
margin-bottom:40px;
}
`;

const Icon = styled.i`
visibility:hidden;

@media screen and (min-width: 1024px ){
font-size:12.5rem;
display: flex;
color:#4FB3B2;
visibility:visible;
}

`;
const BibliografiaResumo = styled.p`



@media screen and (min-width: 1024px ){
  
color: white;
display:flex;
flex-direction:column;
justify-content: center;
}


`;
const Nome = styled.h2`


@media screen and (min-width: 1024px ){
margin:0;
font-weight:400;
font-size:32px;
}
`;
const AreaProf = styled.p`


@media screen and (min-width: 1024px ){
  margin:0;

}
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
