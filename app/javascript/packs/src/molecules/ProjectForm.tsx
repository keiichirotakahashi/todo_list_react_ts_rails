import React, { FC, ChangeEvent, FormEvent } from 'react';
import { Txt } from '../atoms/Txt';
import { FormErrors } from '../molecules/FormErrors';
import { Form } from '../atoms/Form';
import { FormItem } from '../molecules/FormItem';
import { Btn } from '../atoms/Btn';
import { ProjectFormDataType } from '../pages/TopPage';
import styled from 'styled-components';

interface ProjectFormProps {
  id?: number,
  formName: string;
  buttonText: string;
  projectFormData: ProjectFormDataType;
  formErrors: string[];
  handleProjectFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleProjectFormSubmit: (id?: number) => (event: FormEvent) => void;
}

export const ProjectForm: FC<ProjectFormProps> = props => {
  const {
    id,
    formName,
    buttonText,
    projectFormData,
    formErrors,
    handleProjectFormChange,
    handleProjectFormSubmit
  } = props;
  const { name, url } = projectFormData;

  return (
    <>
      <StyledTxt>
        {formName}
      </StyledTxt>
      <FormErrors formErrors={formErrors} />
      <Form id={id} handleProjectFormSubmit={handleProjectFormSubmit}>
        <FormContent>
          <FormItemWrapper>
            <FormItem
              label='プロジェクト名'
              fieldType='text'
              fieldName='name'
              fieldValue={name}
              handleProjectFormChange={handleProjectFormChange} />
            <FormItem
              label='URL'
              fieldType='text'
              fieldName='url'
              fieldValue={url}
              handleProjectFormChange={handleProjectFormChange} />
          </FormItemWrapper>
          <BtnWrapper>
            <Btn>
              {buttonText}
            </Btn>
          </BtnWrapper>
        </FormContent>
      </Form>
    </>
  );
};

const StyledTxt = styled(Txt)`
  font-size: 20px;
  margin-bottom: 12px;
`;

const FormContent = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const FormItemWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 78%;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
