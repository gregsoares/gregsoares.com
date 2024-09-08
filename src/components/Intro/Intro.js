import React from 'react';
import { Title, Container } from './styled.js';
import API_Tester from '../API_Tester/API_Tester';

const Intro = () => {
  return (
    <Container>
      <Title>Welcome to my React app!</Title>
      <p>Let's get started!</p>
      <API_Tester />
    </Container>
  );
};

export default Intro;
