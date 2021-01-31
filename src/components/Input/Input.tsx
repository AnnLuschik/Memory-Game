import React, { useCallback } from 'react';
import styled from 'styled-components';

type IProps = {
  value: string
  onChange: (text: string) => void
  id: string
  error?: boolean
};

export const Input = React.memo(({
  value, onChange, id, error = false,
}:IProps) => {
  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, [onChange]);

  return (
    <StyledInput
      value={value}
      onChange={onChangeHandler}
      id={id}
      errorStyle={error}
    />
  );
});

const StyledInput = styled.input<{errorStyle: boolean}>`
  min-width: 275px;
  padding: 5px 10px;
  margin-bottom: 5px;
  border: 1px solid;
  border-radius: 5px;
  outline: none;
  ${(props) => (props.errorStyle ? 'border-color: #f70f0f' : 'border-color: #000000')}
`;
