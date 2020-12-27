import React, { FC, ChangeEvent, FormEvent } from 'react';
import { Txt } from '../atoms/Txt';
import { FormErrors } from '../molecules/FormErrors';
import { Form } from '../atoms/Form';
import { FormItem } from '../molecules/FormItem';
import { TextField } from '../atoms/TextField';
import { DateField } from '../atoms/DateField';
import { Select } from '../atoms/Select';
import { Option } from '../atoms/Option';
import { Btn } from '../atoms/Btn';
import { STATUSES } from '../molecules/TaskCard';
import { TaskFormDataType } from '../pages/ProjectPage';
import styled from 'styled-components';

interface TaskFormProps {
  id?: number,
  formName: string;
  buttonText: string;
  taskFormData: TaskFormDataType;
  formErrors: string[];
  handleTaskFormChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  handleTaskFormSubmit: (id?: number) => (event: FormEvent) => void;
}

export const TaskForm: FC<TaskFormProps> = props => {
  const {
    id,
    formName,
    buttonText,
    taskFormData,
    formErrors,
    handleTaskFormChange,
    handleTaskFormSubmit,
  } = props;
  const { name, due_on, status } = taskFormData;

  return (
    <>
      <StyledTxt>
        {formName}
      </StyledTxt>
      <FormErrors formErrors={formErrors} />
      <Form id={id} onSubmit={handleTaskFormSubmit}>
        <FormItemWrapper>
          <FormItem label='タスク名'>
            <StyledTextField
              fieldName='name'
              fieldValue={name}
              onChange={handleTaskFormChange} />
          </FormItem>
          <FormItem label='期限'>
            <StyledDateField
              fieldName='due_on'
              fieldValue={due_on}
              onChange={handleTaskFormChange} />
          </FormItem>
          <FormItem label='ステータス'>
            <StyledSelect
              fieldName='status'
              value={status}
              onChange={handleTaskFormChange}>
              {
                Object.keys(STATUSES).map(key => (
                  <Option value={key} key={key}>
                    {STATUSES[key]}
                  </Option>
                ))
              }
            </StyledSelect>
          </FormItem>
        </FormItemWrapper>
        <BtnWrapper>
          <Btn>
            {buttonText}
          </Btn>
        </BtnWrapper>
      </Form>
    </>
  );
};

const StyledTxt = styled(Txt)`
  font-size: 20px;
  margin-bottom: 12px;
`;

const FormItemWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 78%;
  }
`;

const StyledTextField = styled(TextField)`
  width: 95%;
`;

const StyledDateField = styled(DateField)`
  width: 95%;
`;

const StyledSelect = styled(Select)`
  width: 100%;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
