import { AiFillGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const Perfil = styled.img`
width:15.625rem;
height:250px;
border-radius:50%;
border-radius:50%;
border: 5px solid #4FB3B2;
padding:0.625rem;
@media (min-width:1024px){
width:250px;
height:250px;
border-radius:50%;
border: 5px solid #4FB3B2;
padding:10px;
}

`;

const Contato = styled.div`
display:flex;
flex-direction:column;
`;
const Linkedin = styled.a`
font-size:32px;
text-decoration:none;
color:#4fb3b2;
`;
const AtivaLink = styled.span`
visibility:hidden;

`;
const Email = styled.a`
font-size:32px;
text-decoration:none;
color:#4fb3b2;

`;
const Github = styled.a`
font-size:32px;
text-decoration:none;
color:#4fb3b2;
`;
const Itens = styled.div`
@media  (min-width: 1024px ){
display:flex;
flex-direction:row;
justify-content:center;

  }
  `;

export default function Contatos() {
  return (
    <Contato >
      <Perfil src="https://cdn.discordapp.com/attachments/962910949994541076/964393771624181800/277999728_722500325423212_2400233973639669092_n.webp" />
      <Itens>
        <Email href="mailto:gabrielb.defigueiredo@gmail.com">
          <AiOutlineMail />
          <AtivaLink>.</AtivaLink>
        </Email>
        <Github href="https://github.com/Cyacer">
          <AiFillGithub />
          <AtivaLink>.</AtivaLink>
        </Github>
        <Linkedin href="https://www.linkedin.com/in/gabriel-barreto-cyacer/">

          <AiOutlineLinkedin />
          <AtivaLink>.</AtivaLink>
        </Linkedin>
      </Itens>
    </Contato>

  );
}
