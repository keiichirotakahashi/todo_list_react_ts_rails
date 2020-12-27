import React, { FC, FormEvent } from 'react';
import styled from 'styled-components';

interface FormProps {
  children: React.ReactNode;
  id?: number;
  onSubmit: (id?: number) => (event: FormEvent) => void;
}

export const Form: FC<FormProps> = props => {
  const { children, id, onSubmit } = props;

  return (
    <StyledForm onSubmit={onSubmit(id)}>{children}</StyledForm>
  );
};

const StyledForm = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
