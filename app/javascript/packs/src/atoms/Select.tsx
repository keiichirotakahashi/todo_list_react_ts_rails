import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface SelectProps {
  children: React.ReactNode;
  fieldName: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export const Select: FC<SelectProps> = props => {
  const { children, fieldName, value, onChange, className } = props;

  return (
    <StyledSelect
      name={fieldName}
      value={value}
      onChange={onChange}
      className={className}>
      {children}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  padding: 5px 10px;
  &:focus {
    outline: 1px solid #e4996d;
  }
`;
