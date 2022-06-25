import Aos from 'aos';
import { useEffect } from 'react';
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

import Footer from '../src/components/footer';
import Navbar from '../src/components/navbar';
import Projetos from '../src/components/projetos';
import Resumo from '../src/components/resumo';
import Skills from '../src/components/Skills';
import Sobre from '../src/components/sobre';

import 'aos/dist/aos.css';

const Root = styled.div`

`;

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
    Aos.refresh();
  }, []);
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
