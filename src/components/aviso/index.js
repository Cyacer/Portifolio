/* eslint-disable react/react-in-jsx-scope */
// src/components/GitHubCorner/index.js
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  border: 0;
  right: 0;
  z-index: 20; 
  background-color:black;
  color:white;
`;

// eslint-disable-next-line react/prop-types
export default function GitHubCorner({ projectUrl }) {
  return (
    <Wrapper>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        em criação
      </a>
    </Wrapper>
  );
}
