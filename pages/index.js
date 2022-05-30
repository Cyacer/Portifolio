/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Navbar from '../src/components/navbar';
import Resumo from '../src/components/resumo';
import Sobre from '../src/components/sobre';
import Skills from '../src/components/Skills';
import Projetos from '../src/components/projetos';
import Footer from '../src/components/footer';

const Root = styled.div`

`;

export default function Home() {
  return (
    <Root>
      <Navbar />
      <Resumo />
      <Sobre />
      <Projetos />
      <Skills />
      <Footer />
    </Root>
  );
}
