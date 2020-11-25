import React, { FC, ChangeEvent } from 'react';
import { FormLabel } from '../atoms/FormLabel';
import { TextField } from '../atoms/TextField';
import styled from 'styled-components';

interface FormItemProps {
  label: string;
  fieldType: 'text';
  fieldName?: string;
  fieldValue?: string;
  handleProjectFormChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormItem: FC<FormItemProps> = props => {
  const { label, fieldType, fieldName, fieldValue, handleProjectFormChange } = props;

  let field;
  switch (fieldType) {
    default:
      field = (
        <StyledTextField
          fieldType={fieldType}
          fieldName={fieldName}
          fieldValue={fieldValue}
          handleProjectFormChange={handleProjectFormChange} />
      );
  }

  return (
    <StyledFormItem>
      <FormLabelWrapper>
        <FormLabel>
          {label}
        </FormLabel>
      </FormLabelWrapper>
      <FieldWrapper>
        {field}
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

const StyledTextField = styled(TextField)`
  width: 95%;
`;
