import React from 'react';
import styled from 'styled-components';

interface IProps {
  id: string
  name: string
  value: string
  onChange: () => void
  checked: boolean
  image: string
}

export const BackInput = React.memo(({
  id, name, value, onChange, checked, image,
}:IProps) => (
  <>
    <StyledInput type="radio" id={id} name={name} value={value} onChange={onChange} checked={checked} />
    <StyledLabel htmlFor={id} image={image} />
  </>
));

const StyledLabel = styled.label<{image: string}>`
  width: 175px;
  height: 100px;
  ${(props) => `background: url(${props.image}) center no-repeat;`}
  background-size: contain;
  cursor: pointer;
`;

const StyledInput = styled.input`
  display: none;
  visibility: hidden;

  &:checked + ${StyledLabel} {
    transform: scale(1.1);
  }
`;
