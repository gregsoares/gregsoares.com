import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  min-width: 300px;
  border: 1px solid black;
  background-color: #b8aa86;
`;

export const APITestButton = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid black;
`;

export const APITestOutput = styled.div`
  margin: 1em;
  padding: 0.25em 1em;
  background-color: #c2bfb6;
`;
