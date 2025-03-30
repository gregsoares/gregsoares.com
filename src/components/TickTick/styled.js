import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 1em;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2em;
  background-color: #444;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
`;

export const AuthInput = styled.input`
  margin-bottom: 1em;
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  background-color: #555;
  color: #fff;
`;

export const AuthButton = styled.button`
  padding: 0.5em;
  margin-bottom: 1em;
  border: none;
  border-radius: 4px;
  background-color: #666;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #777;
  }
`;

export const CancelButton = styled.button`
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  background-color: #888;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;
