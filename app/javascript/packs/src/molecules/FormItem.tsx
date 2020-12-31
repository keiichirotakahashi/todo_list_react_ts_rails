import React, { FC } from 'react';
import { FormLabel } from '../atoms/FormLabel';
import styled from 'styled-components';

interface FormItemProps {
  children: React.ReactNode;
  label: string;
}

export const FormItem: FC<FormItemProps> = props => {
  const { children, label } = props;

  return (
    <StyledFormItem>
      <FormLabelWrapper>
        <FormLabel>
          {label}
        </FormLabel>
      </FormLabelWrapper>
      <FieldWrapper>
        {children}
      </FieldWrapper>
    </StyledFormItem>
  );
};

const StyledFormItem = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const FormLabelWrapper = styled.div`
  width: 30%;
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
`;
