/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const List = styled.ul`
 list-style:none;
 display:flex;
 padding:20px;
 flex-direction:column;
 align-items: center;
@media (min-width: 1024px){
  flex-direction:row;
  align-items: center;
}
`;
const ContainerItens = styled.li`

@media (min-width:1024px){

  padding:0 1.5rem 0 1.5rem;

}

`;
const Itens = styled.a`
color:#fff;
text-decoration:none;
:hover{
  color: #4FB3B2;
}
@media (width:1024px){
font-size: 1rem;
text-decoration: none;
color: #fff;
font-family:'Poppins', sans-serif;
font-weight:300;
}
`;
export default function WidgetItens() {
  return (
    <List>
      <ContainerItens><Itens href="#Sobre">Sobre</Itens></ContainerItens>
      <ContainerItens><Itens href="#Projetos">Projetos</Itens></ContainerItens>
      <ContainerItens><Itens href="#">Skills</Itens></ContainerItens>
      <ContainerItens><Itens href="#">Contatos</Itens></ContainerItens>
    </List>

  );
}
