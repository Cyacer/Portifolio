/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Navbar from '../src/navbar';
import Sobre from '../src/sobre';

const Root = styled.div`

`;

export default function Home() {
  return (
    <Root>
      <Navbar />
      <Sobre />
    </Root>
  );
}
