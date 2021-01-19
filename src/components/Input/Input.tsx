import React, { useCallback } from 'react';
import styled from 'styled-components';

type IProps = {
  value: string
  onChange: (text: string) => void
  id: string
  required: boolean
};

export const Input = React.memo(({
  value, onChange, id, required,
}:IProps) => {
  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, [onChange]);

  return <StyledInput value={value} onChange={onChangeHandler} id={id} {...required ? 'required' : null} />;
});

const StyledInput = styled.input`
  padding: 5px 10px;
`;
