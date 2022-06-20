import Head from 'next/head';
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Script from 'next/script'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:#2D3B4D;
    font-family:'Poppins', sans-serif;
    color:white;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Gabriel Barreto / Cyacer" />
        <meta name="description" content="Meu nome é Gabriel, desenvolvo interfaces mordenas e de alta qualidade, concentrado em desempenho, responsividade." />
        <meta name="keywords" content=" sites, web, desenvolvimento, frontend, cyacer, dba, portifólio, website" />

        <title>Portifólio | Cyacer - Desenvolvedor Front-End</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet" />
          <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D5GEC46GEM"></script>
        <script> window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-D5GEC46GEM'); </script>
      </Head>
    </>
  );
}
