import React, { FC, ChangeEvent, FormEvent } from 'react';
import { TaskType } from '../pages/ProjectPage';
import { H1 } from '../atoms/Heading';
import { TaskCard } from '../molecules/TaskCard';
import { TaskNewCard } from '../molecules/TaskNewCard';
import { TaskFormDataType } from '../pages/ProjectPage';
import styled from 'styled-components';

interface TasksProps {
  projectName: string;
  tasks: TaskType[];
  newTaskFormData: TaskFormDataType;
  taskFormData: TaskFormDataType;
  newFormErrors: string[];
  formErrors: string[];
  buildTaskFormData: (id: number) => void;
  handleNewTaskFormChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  handleTaskFormChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  handleTaskFormSubmit: (id?: number) => (event: FormEvent) => void;
  resetTaskFormData: () => void;
  removeFormErrors: () => void;
}

export const Tasks: FC<TasksProps> = props => {
  const {
    projectName,
    tasks,
    newTaskFormData,
    taskFormData,
    newFormErrors,
    formErrors,
    buildTaskFormData,
    handleNewTaskFormChange,
    handleTaskFormChange,
    handleTaskFormSubmit,
    resetTaskFormData,
    removeFormErrors,
  } = props;

  return (
    <>
      <StyledHeadingWrapper>
        <H1>
          {projectName}
        </H1>
      </StyledHeadingWrapper>
      <div>
        <TaskNewCard
          taskFormData={newTaskFormData}
          formErrors={newFormErrors}
          handleTaskFormChange={handleNewTaskFormChange}
          handleTaskFormSubmit={handleTaskFormSubmit} />
        {
          tasks.length > 0 ? (
            tasks.map(task => (
              <TaskCard
                taskData={task}
                taskFormData={taskFormData}
                formErrors={formErrors}
                buildTaskFormData={buildTaskFormData}
                handleTaskFormChange={handleTaskFormChange}
                handleTaskFormSubmit={handleTaskFormSubmit}
                resetTaskFormData={resetTaskFormData}
                removeFormErrors={removeFormErrors}
                key={task.id} />
            ))
          ) : null
        }
      </div>
    </>
  );
};

const StyledHeadingWrapper = styled.div`
  margin-bottom: 16px;
`;
