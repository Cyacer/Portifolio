/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Navbar from '../src/navbar';
import Sobre from '../src/sobre';
import Skills from '../src/Skills';
import Projetos from '../src/projetos';

const Root = styled.div`

`;

export default function Home() {
  return (
    <Root>
      <Navbar />
      <Sobre />
      <Projetos />
      <Skills />
    </Root>
  );
}
