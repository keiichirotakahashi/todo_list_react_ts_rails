import React, { FC, ChangeEvent, FormEvent } from 'react';
import { RoundedRectangleCard } from '../atoms/RoundedRectangleCard';
import { TaskForm } from '../molecules/TaskForm';
import { TaskFormDataType } from '../pages/ProjectPage';

interface TaskNewCardProps {
  taskFormData: TaskFormDataType;
  formErrors: string[];
  handleTaskFormChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  handleTaskFormSubmit: (id?: number) => (event: FormEvent) => void;
}

export const TaskNewCard: FC<TaskNewCardProps> = props => {
  const {
    taskFormData,
    formErrors,
    handleTaskFormChange,
    handleTaskFormSubmit,
  } = props;

  return (
    <RoundedRectangleCard>
      <TaskForm
        formName={'新しいタスクを作成する'}
        buttonText={'作成'}
        taskFormData={taskFormData}
        formErrors={formErrors}
        handleTaskFormChange={handleTaskFormChange}
        handleTaskFormSubmit={handleTaskFormSubmit} />
    </RoundedRectangleCard>
  );
};
