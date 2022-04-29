/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

import { Fundo, FundoNavbar } from '../../theme/variaveis';
import Resumo from './resumo';
import WidgetItens from './widgetItens';

const Header = styled.header`
    background: rgb(47,62,82);
    background:${FundoNavbar};
    background-repeat:no-repeat;
    width:100vw;


    @media (min-width: 1024px ) {
    background: rgb(47,62,82);
    background:${FundoNavbar};
    background-repeat:no-repeat;
    padding-bottom:0;
    height:600px;
    border-radius: 0% 0% 10% 10%  ;
    width:100%;
    }

`;
const Navigation = styled.nav`
background-color:#2D3B4D;
@media (min-width: 1024px ) {
display: flex;
flex-wrap:wrap;
align-items:center;
justify-content: space-between;
padding:15px;
background-color:${Fundo};
}
`;

const Home = styled.a`
text-decoration: none;
color: #fff;
@media (min-width:1024px){
font-size: 1rem;
text-decoration: none;
color: #fff;
padding-left:10px;
font-family:'Poppins', sans-serif;
font-weight:400;
}
`;
const ContainerSvg = styled.div`
display:grid;

@media screen and (min-width: 1024px){
  display:none;

}
`;
const SvgWave = styled.svg`

@media screen and (min-width: 1024px){

}
`;

export default function Navbar() {
  return (
    <Header>
      <Navigation>
        <Home href="#">
          {'<'}
          Gabriel Barreto
          {'>'}
        </Home>
        <WidgetItens />
      </Navigation>
      <Resumo />
      <ContainerSvg>
        <SvgWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2D3B4D" fillOpacity="1" d="M0,32L60,32C120,32,240,32,360,48C480,64,600,96,720,122.7C840,149,960,171,1080,160C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" /></SvgWave>
      </ContainerSvg>
    </Header>
  );
}
