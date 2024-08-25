import styled from 'styled-components';
import { GlobalStyle } from './globalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: lightgray;
  margin: 0;
  padding: 0;

  ${GlobalStyle}
`;
