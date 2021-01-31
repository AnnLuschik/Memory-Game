import React from 'react';
import styled from 'styled-components';
import type { LevelTypes } from '../../../../state';

interface IProps {
  id: string
  name: string
  value: LevelTypes
  onChange: () => void
  checked: boolean
  text: string
}

export function LevelInput({
  id, name, value, onChange, checked, text,
}:IProps) {
  return (
    <>
      <StyledInput type="radio" id={id} name={name} value={value} onChange={onChange} checked={checked} />
      <StyledLabel htmlFor={id}>{text}</StyledLabel>
    </>
  );
}

const StyledLabel = styled.label`
  margin-bottom: 10px;
  padding: 10px;
  min-width: 125px;
  color: #ffffff;
  background: #F65263;
  text-transform: capitalize;
  cursor: pointer;
`;

const StyledInput = styled.input`
  display: none;
  visibility: hidden;

  &:checked + ${StyledLabel} {
    background: #db0a0a;
  }
`;
