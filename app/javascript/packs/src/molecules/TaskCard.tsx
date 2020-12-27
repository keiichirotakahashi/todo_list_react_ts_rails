import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { TaskType } from '../pages/ProjectPage';
import { RoundedRectangleCard } from '../atoms/RoundedRectangleCard';
import { H2 } from '../atoms/Heading';
import { ValueWithLabel } from '../molecules/ValueWithLabel';
import { Tag } from '../atoms/Tag';
import { Btn } from '../atoms/Btn';
import { Modal } from '../molecules/Modal';
import { TaskForm } from '../molecules/TaskForm';
import { TaskFormDataType } from '../pages/ProjectPage';
import styled from 'styled-components';

dayjs.locale('ja');

interface StatusesType {
  todo: string;
  doing: string;
  done: string;
}

export const STATUSES: StatusesType = {
  todo: '未完了',
  doing: '進行中',
  done: '完了',
};

interface TaskCardProps {
  taskData: TaskType;
  taskFormData: TaskFormDataType;
  formErrors: string[];
  buildTaskFormData: (id: number) => void;
  handleTaskFormChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  handleTaskFormSubmit: (id?: number) => (event: FormEvent) => void;
  resetTaskFormData: () => void;
  removeFormErrors: () => void;
}

export const TaskCard: FC<TaskCardProps> = props => {
  const {
    taskData,
    taskFormData,
    formErrors,
    buildTaskFormData,
    handleTaskFormChange,
    handleTaskFormSubmit,
    resetTaskFormData,
    removeFormErrors,
  } = props;
  const id: number = taskData.id;
  const name: string = taskData.name;
  const dueOn: string = taskData.due_on;
  const formattedDueOn: string = dayjs(dueOn).format('YYYY/MM/DD');
  const createdAt: string = taskData.created_at;
  const formattedCreatedAt: string = dayjs(createdAt).format('YYYY/MM/DD');
  const status: 'todo' | 'doing' | 'done' = taskData.status;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickEditTask = () => {
    setIsModalOpen(true);
    buildTaskFormData(id);
  };

  const handleClickModalClose = () => {
    setIsModalOpen(false);
    resetTaskFormData();
    removeFormErrors();
  };

  return (
    <RoundedRectangleCard>
      <StyledHeadingWrapper>
        <StyledHeading>{name}</StyledHeading>
      </StyledHeadingWrapper>
      <Content>
        <Info>
          <ValueWithLabel label='期限' value={formattedDueOn} />
          <ValueWithLabel label='作成日' value={formattedCreatedAt} />
        </Info>
        <Action>
          <TagWrapper>
            <StyledTag status={status}>
              {STATUSES[status]}
            </StyledTag>
          </TagWrapper>
          <ButtonsWrapper>
            <StyledBtn onClick={handleClickEditTask}>
              編集
            </StyledBtn>
            <StyledBtn>
              削除
            </StyledBtn>
          </ButtonsWrapper>
        </Action>
      </Content>
      {
        isModalOpen ? (
          <Modal handleClickModalClose={handleClickModalClose}>
            <TaskForm
              id={id}
              formName='タスクを更新する'
              buttonText='保存'
              taskFormData={taskFormData}
              formErrors={formErrors}
              handleTaskFormChange={handleTaskFormChange}
              handleTaskFormSubmit={handleTaskFormSubmit} />
          </Modal>
        ) : null
      }
    </RoundedRectangleCard>
  );
};

const StyledHeadingWrapper = styled.div`
  margin-bottom: 12px;
`;

const StyledHeading = styled(H2)`
  font-size: 20px;
  padding: initial;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

const Content = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const Info = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

const Action = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const TagWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
  }
`;

const StyledTag = styled(Tag)`
  min-width: 120px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBtn = styled(Btn)`
  min-width: 120px;
  margin-left: 16px;
  @media screen and (max-width: 767px) {
    min-width: 100px;
    width: 48%;
    margin-left: initial;
  }
`;
