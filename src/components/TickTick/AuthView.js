import React, { useState } from 'react';
import { AuthContainer, AuthForm, AuthInput, AuthButton, CancelButton } from './styled';

const AuthView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Auth logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthButton type="submit">Submit</AuthButton>
        <CancelButton type="button" onClick={handleCancel}>
          Cancel
        </CancelButton>
      </AuthForm>
    </AuthContainer>
  );
};

export default AuthView;
