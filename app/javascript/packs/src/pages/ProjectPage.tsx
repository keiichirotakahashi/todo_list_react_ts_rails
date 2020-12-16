import React, { FC, useState, useEffect } from 'react';
import { FlashType } from '../App';
import { useParams } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { Flash } from '../molecules/Flash';
import { Tasks } from '../organisms/Tasks';
import styled from 'styled-components';

export interface TaskType {
  id: number;
  name: string;
  due_on: Date;
  status: 'todo' | 'doing' | 'done';
  project_id: number;
  created_at: Date;
  updated_at: Date;
}

interface ProjectPageProps {
  flash: FlashType;
  showErrorFlash: (message?: string) => void;
}

export const ProjectPage: FC<ProjectPageProps> = props => {
  const { flash, showErrorFlash } = props;
  const { url } = useParams<{url: string}>();
  const [projectName, setProjectName] = useState<string>('');
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    let unmounted = false;

    const getProject = async () => {
      try {
        const response = await fetch(`/api/v1/projects/${url}`);
        const project = await response.json();
        if (!unmounted) setProjectName(project.name);
      } catch (error) {
        showErrorFlash();
      }
    };
    getProject();

    const getTasks = async () => {
      try {
        const response = await fetch(`/api/v1/projects/${url}/tasks`);
        const tasks: TaskType[] = await response.json();
        if (!unmounted) setTasks(tasks);
      } catch (error) {
        showErrorFlash();
      }
    };
    getTasks();

    const cleanup = () => { unmounted = true };

    return cleanup;
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <Flash isVisible={flash.isVisible} status={flash.status}>
          {flash.message}
        </Flash>
        <Content>
          <Tasks
            projectName={projectName}
            tasks={tasks} />
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  background: #fbf5e9;
  min-height: 80vh;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 28px 0;
`;
