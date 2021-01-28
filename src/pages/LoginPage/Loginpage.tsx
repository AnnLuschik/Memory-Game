import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Input, Button } from '../../components';
import { loginRequest } from '../../state';

export function LoginPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mail, setMail] = useState('');
  const [validationError, setValidationError] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = useCallback(() => {
    if (name.length) {
      dispatch(loginRequest(JSON.stringify({ name, surname, mail })));
      history.push('/');
    } else {
      setValidationError(true);
    }
  }, [dispatch, name, surname, mail, history]);

  return (
    <Container>
      <Title>Please login before game start</Title>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <StyledLabel htmlFor="name">
          <StyledText>
            First name
            <Asterisk>*</Asterisk>
          </StyledText>
          <Input value={name} onChange={setName} id="name" error={validationError} />
          <ErrorText visible={validationError}>This field is required.</ErrorText>
        </StyledLabel>
        <StyledLabel htmlFor="surname">
          <StyledText>Surname</StyledText>
          <Input value={surname} onChange={setSurname} id="surname" error={false} />
        </StyledLabel>
        <StyledLabel htmlFor="mail">
          <StyledText>E-mail</StyledText>
          <Input value={mail} onChange={setMail} id="mail" error={false} />
        </StyledLabel>
        <Button onClick={loginHandler}>Login</Button>
      </StyledForm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  border-radius: 10px;
  background: #cccccc;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const StyledText = styled.p`
  margin-bottom: 5px;
`;

const Asterisk = styled.span`
  color: #f70f0f;
`;

const ErrorText = styled.p<{visible: boolean}>`
  margin-bottom: 10px;
  font-weight: 600;
  color: #f70f0f;
  ${(props) => (props.visible ? 'display: block;' : 'display: none;')}
`;
