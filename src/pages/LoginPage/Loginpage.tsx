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
  const [nameValidationError, setNameValidationError] = useState({
    value: false,
    text: '',
  });
  const [surnameValidationError, setSurnameValidationError] = useState({
    value: false,
    text: '',
  });
  const [mailValidationError, setMailValidationError] = useState({
    value: false,
    text: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const validate = useCallback(() => {
    let isValid = true;

    if (!name) {
      isValid = false;
      setNameValidationError({
        value: true,
        text: 'This field is required.',
      });
    }

    if (name.length > 15) {
      isValid = false;
      setNameValidationError({
        value: true,
        text: 'The maximum length is 15 characters.',
      });
    }

    if (name.length > 0 && name.length <= 15) {
      isValid = true;
      setNameValidationError({
        value: false,
        text: '',
      });
    }

    if (surname.length > 15) {
      isValid = false;
      setSurnameValidationError({
        value: true,
        text: 'The maximum length is 15 characters.',
      });
    } else {
      setSurnameValidationError({ ...surnameValidationError, value: false });
    }

    if (mail && !mail.includes('@')) {
      isValid = false;
      setMailValidationError({
        value: true,
        text: 'Enter the valid email.',
      });
    } else {
      setMailValidationError({ ...mailValidationError, value: false });
    }

    return isValid;
  }, [name, surname, mail, surnameValidationError, mailValidationError]);

  const loginHandler = useCallback(() => {
    if (validate()) {
      dispatch(loginRequest(JSON.stringify({ name, surname, mail })));
      history.push('/');
    }
  }, [dispatch, history, validate, mail, name, surname]);

  return (
    <Container>
      <Title>Please login before game start</Title>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <StyledLabel htmlFor="name">
          <StyledText>
            First name
            <Asterisk>*</Asterisk>
          </StyledText>
          <Input value={name} onChange={setName} id="name" error={nameValidationError.value} />
          <ErrorText visible={nameValidationError.value}>{nameValidationError.text}</ErrorText>
        </StyledLabel>
        <StyledLabel htmlFor="surname">
          <StyledText>Surname</StyledText>
          <Input value={surname} onChange={setSurname} id="surname" error={surnameValidationError.value} />
          <ErrorText visible={surnameValidationError.value}>
            {surnameValidationError.text}
          </ErrorText>
        </StyledLabel>
        <StyledLabel htmlFor="mail">
          <StyledText>E-mail</StyledText>
          <Input value={mail} onChange={setMail} id="mail" error={mailValidationError.value} />
          <ErrorText visible={mailValidationError.value}>{mailValidationError.text}</ErrorText>
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
