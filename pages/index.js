/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Navbar from '../src/components/navbar';
import Resumo from '../src/components/resumo';
import Sobre from '../src/components/sobre';
import Skills from '../src/components/Skills';
import Projetos from '../src/components/projetos';
import Footer from '../src/components/footer';
import Script from 'next/script';

const Root = styled.div`

`;

export default function Home() {
  return (
    <Root>
              <!-- Global site tag (gtag.js) - Google Analytics -->
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D5GEC46GEM"></Script>
        <Script> window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-D5GEC46GEM'); </Script>
      <Navbar />
      <Resumo />
      <Sobre />
      <Projetos />
      <Skills />
      <Footer />
    </Root>
  );
}
