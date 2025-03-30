import React from 'react';
import { Container, APITestButton, APITestOutput } from './styled';

const baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.gregsoares.com';
console.debug('Base URL :', baseURL);

const API_Tester = () => {
  const [apiOutput, setApiOutput] = React.useState('');
  const [error, setError] = React.useState(null);

  const testAPI = async () => {
    try {
      const response = await fetch(`${baseURL}/test`, {
        mode: 'no-cors', // Added to bypass CORS policy
        headers: {
          'x-access-token': '12345'
        }
      });
      const data = await response.json();
      setApiOutput(data.message);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const DisplayAPIOutput = () => {
    if (!apiOutput) {
      return;
    }

    return <APITestOutput>{apiOutput}</APITestOutput>;
  };

  const DisplayError = () => {
    if (!error) {
      return;
    }

    return <APITestOutput>Error: {error.data}</APITestOutput>;
  };

  return (
    <Container>
      <APITestButton onClick={testAPI}>Test API</APITestButton>
      <DisplayAPIOutput />
      <DisplayError />
    </Container>
  );
};

export default API_Tester;
