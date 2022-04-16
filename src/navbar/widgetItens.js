/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const List = styled.ul`
gap: 25px;
display:flex;
list-style:none;

@media screen and(max-width: 600px){
  flex-direction:column;
  align-items: center;
  padding:20px;
}
`;

const Itens = styled.a`

font-size: 1rem;
text-decoration: none;
color: #fff;
padding:0 1.5rem 0 1.5rem;
font-family:'Poppins', sans-serif;
font-weight:300;
:hover{
  color: #4FB3B2;
}
`;
export default function WidgetItens() {
  return (
    <List>
      <li><Itens href="#">Sobre</Itens></li>
      <li><Itens href="#">Projetos</Itens></li>
      <li><Itens href="#">Skills</Itens></li>
      <li><Itens href="#">Contatos</Itens></li>
    </List>

  );
}
