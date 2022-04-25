/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const Container = styled.div`


@media screen and (min-width: 1024px ){
  background-color:#222A36;
color:white;
display:flex;
border-top: 2px solid rgba(250, 250, 250, 0.2);
box-sizing:border-box;

}
`;
const Copyrigth = styled.p`



@media screen and (min-width: 1024px ){
padding-left:10px;
padding-top:30px;
padding-top:10px;

}
`;
export default function Footer() {
  return (
    <Container>
      <Copyrigth>
        © 2022 cyacerdev.com.br
      </Copyrigth>

    </Container>

  );
}
