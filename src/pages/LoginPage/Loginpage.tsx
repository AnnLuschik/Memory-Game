import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from '../../components';

export function LoginPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mail, setMail] = useState('');

  return (
    <Container>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <StyledLabel htmlFor="name">
          <StyledText>First name</StyledText>
          <Input value={name} onChange={setName} id="name" required />
        </StyledLabel>
        <StyledLabel htmlFor="surname">
          <StyledText>Surname</StyledText>
          <Input value={surname} onChange={setSurname} id="surname" required={false} />
        </StyledLabel>
        <StyledLabel htmlFor="mail">
          <StyledText>E-mail</StyledText>
          <Input value={mail} onChange={setMail} id="mail" required={false} />
        </StyledLabel>
        <Button onClick={() => null}>Login</Button>
      </StyledForm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  background: #cccccc;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const StyledText = styled.p`
  
`;
