/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import WidgetItens from './widgetItens';
import Resumo from './resumo';

const Home = styled.a`
font-size: 1rem;
text-decoration: none;
color: #fff;
padding-left:10px;
font-family:'Poppins', sans-serif;
font-weight:400;
`;
const Navigation = styled.nav`
  display: flex;
flex-wrap:wrap;
align-items:center;
justify-content: space-between;
padding:15px;
`;
const Header = styled.header`
    background: rgb(47,62,82);
    background: radial-gradient(circle,rgba(47,62,82,1) 0%, rgba(32,40,51,1) 100% );
    background-repeat:no-repeat;
    padding-bottom:0;
    height:600px;

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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2D3B4D" fillOpacity="1" d="M0,32L60,32C120,32,240,32,360,48C480,64,600,96,720,122.7C840,149,960,171,1080,160C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" /></svg>

    </Header>
  );
}
