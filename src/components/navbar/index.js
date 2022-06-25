/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

import { Fundo } from '../../Theme/variaveis';
import WidgetItens from './widgetItens';

const Header = styled.header`
    background-repeat:no-repeat;
    width:100vw;
    position:fixed;
    z-index:100000000000000;

    @media (min-width: 1024px ) {
    background-repeat:no-repeat;
    padding-bottom:0;
    border-radius: 0% 0% 10% 10%  ;
    width:100%;
    }

`;
const Navigation = styled.nav`
background-color:#2D3B4D;
display:flex;
justify-content:space-between;
align-items:center;
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
padding-left:10px;
@media (min-width:1024px){
font-size: 1rem;
text-decoration: none;
color: #fff;
padding-left:10px;
font-family:'Poppins', sans-serif;
font-weight:400;
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

    </Header>
  );
}
