import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface DateFieldProps {
  fieldName: string;
  fieldValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const DateField : FC<DateFieldProps> = props => {
  const { fieldName, fieldValue, onChange, className } = props;

  return (
    <StyledDateField
      type='date'
      name={fieldName}
      value={fieldValue}
      onChange={onChange}
      className={className} />
  );
};

const StyledDateField = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  padding: 5px 10px;
  &:focus {
    outline: 1px solid #e4996d;
  }
`;
