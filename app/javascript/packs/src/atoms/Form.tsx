import React, { FC, FormEvent } from 'react';
import styled from 'styled-components';

interface FormProps {
  children: React.ReactNode;
  handleProjectFormSubmit: (event: FormEvent, id?: number) => void;
}

export const Form: FC<FormProps> = props => {
  const { children, handleProjectFormSubmit } = props;

  return (
    <StyledForm onSubmit={handleProjectFormSubmit}>{children}</StyledForm>
  );
};

const StyledForm = styled.form``;
