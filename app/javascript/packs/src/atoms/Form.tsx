import React, { FC, FormEvent } from 'react';
import styled from 'styled-components';

interface FormProps {
  children: React.ReactNode;
  id?: number;
  handleProjectFormSubmit: (id?: number) => (event: FormEvent) => void;
}

export const Form: FC<FormProps> = props => {
  const { children, id, handleProjectFormSubmit } = props;

  return (
    <StyledForm onSubmit={handleProjectFormSubmit(id)}>{children}</StyledForm>
  );
};

const StyledForm = styled.form``;
