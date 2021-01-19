import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: string
  onClick: () => void
}

export const Button = React.memo(({
  children, onClick,
}: IProps) => <StyledButton onClick={onClick}>{children}</StyledButton>);

const StyledButton = styled.button`
  padding: 0.5em 1em;
  font-size: 1em;
  color: #FFFFFF;
  text-transform: uppercase;
  background-color: #F65263;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #ec2f42;
  }
`;
