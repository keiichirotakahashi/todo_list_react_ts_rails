import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  fieldType: 'text';
  fieldName: string;
  fieldValue: string;
  handleProjectFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const TextField : FC<TextFieldProps> = props => {
  const { fieldType, fieldName, fieldValue, handleProjectFormChange, className } = props;

  return (
    <StyledTextField
      type={fieldType}
      name={fieldName}
      value={fieldValue}
      onChange={handleProjectFormChange}
      className={className} />
  );
};

const StyledTextField = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  padding: 5px 10px;
  &:focus {
    outline: 1px solid #e4996d;
  }
`;
