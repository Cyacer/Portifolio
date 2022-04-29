/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const List = styled.ul`
 list-style:none;
 display:flex;
 padding:20px;
 flex-direction:column;
 align-items: center;
@media (min-width: 1024px ){
  align-items: center;

 
  flex-direction:row;
  display:flex;
}
`;

const Itens = styled.a`
color: #fff;
text-decoration: none;
@media (min-width: 1024px ){
font-size: 1rem;
text-decoration: none;
color: #fff;
padding:0 1.5rem 0 1.5rem;
font-family:'Poppins', sans-serif;
font-weight:300;

:hover{
  color: #4FB3B2;
}

}
`;
export default function WidgetItens() {
  return (
    <List>
      <li><Itens href="#Sobre">Sobre</Itens></li>
      <li><Itens href="#Projetos">Projetos</Itens></li>
      <li><Itens href="#Skills">Skills</Itens></li>
      <li><Itens href="#">Contatos</Itens></li>
    </List>

  );
}
