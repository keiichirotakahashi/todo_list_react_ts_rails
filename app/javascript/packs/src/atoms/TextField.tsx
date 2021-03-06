import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  fieldName: string;
  fieldValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const TextField: FC<TextFieldProps> = props => {
  const { fieldName, fieldValue, onChange, className } = props;

  return (
    <StyledTextField
      type='text'
      name={fieldName}
      value={fieldValue}
      onChange={onChange}
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
