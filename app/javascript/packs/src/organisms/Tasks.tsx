import React, { FC } from 'react';
import { TaskType } from '../pages/ProjectPage';
import { H1 } from '../atoms/Heading';
import { TaskCard } from '../molecules/TaskCard';
import styled from 'styled-components';

interface TasksProps {
  projectName: string;
  tasks: TaskType[];
}

export const Tasks: FC<TasksProps> = props => {
  const { projectName, tasks } = props;

  return (
    <>
      <StyledHeadingWrapper>
        <H1>
          {projectName}
        </H1>
      </StyledHeadingWrapper>
      <div>
        {
          tasks.length > 0 ? (
            tasks.map(task => (
              <TaskCard
                taskData={task}
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
