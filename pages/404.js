/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import styled from 'styled-components';

const Error404 = styled.div`

`;
const Error = styled.h1`
text-align: center;
font-size:1000%;
`;
const DescriptionError = styled.p`
text-align: center;
font-size:300%;
`;
const Volta = styled.a`
display: inline-block;
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); 
font-size:200%;
cursor: pointer;
&:hover{
 color : #d0d0d0;
}
`;
export default function NotFound() {
  return (
    <Error404>
      <Error>404</Error>
      <DescriptionError>Parece que esta página não existe!</DescriptionError>
      <Link href="/">
        <Volta>voltar</Volta>
      </Link>
    </Error404>
  );
}
