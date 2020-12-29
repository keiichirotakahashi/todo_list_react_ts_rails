import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
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
  due_on: string;
  status: 'todo' | 'doing' | 'done';
  project_id: number;
  created_at: string;
  updated_at: string;
}

export interface TaskFormDataType {
  name: string;
  due_on: string;
  status: 'todo' | 'doing' | 'done';
}

interface ProjectPageProps {
  flash: FlashType;
  showNoticeFlash: (message: string) => void;
  showErrorFlash: (message?: string) => void;
  removeFlashNow: () => void;
}

export const ProjectPage: FC<ProjectPageProps> = props => {
  const { flash, showNoticeFlash, showErrorFlash, removeFlashNow } = props;
  const { url } = useParams<{url: string}>();
  const [projectName, setProjectName] = useState<string>('');
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const initialTaskFormData: TaskFormDataType = {
    name: '',
    due_on: '',
    status: 'todo',
  };
  const [newTaskFormData, setNewTaskFormData] = useState<TaskFormDataType>(initialTaskFormData);
  const [taskFormData, setTaskFormData] = useState<TaskFormDataType>(initialTaskFormData);
  const initialFormErrors: string[] = [];
  const [newFormErrors, setNewFormErrors] = useState<string[]>(initialFormErrors);
  const [formErrors, setFormErrors] = useState<string[]>(initialFormErrors);
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

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

  const handleNewTaskFormChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setNewTaskFormData({ ...newTaskFormData, [name]: value });
  };

  const handleTaskFormSubmit = (id?: number) => (event: FormEvent) => {
    event.preventDefault();
    setFormErrors(initialFormErrors);
    removeFlashNow();
    if (id) return patchTask(id);
    postTask();
  };

  const postTask = async () => {
    setFormErrors(initialFormErrors);
    try {
      const response = await fetch(`/api/v1/projects/${url}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({ task: newTaskFormData }),
      });
      if (response.ok) {
        const newTask = await response.json();
        tasks.unshift(newTask);
        setTasks(tasks);
        setNewTaskFormData(initialTaskFormData);
        showNoticeFlash('タスクを作成しました。');

        return;
      }
      const errorMessages = await response.json();
      setNewFormErrors(errorMessages);
      showErrorFlash('タスクの作成に失敗しました。');
    } catch (error) {
      showErrorFlash();
    }
  };

  const buildTaskFormData = async (id: number) => {
    removeFlashNow();

    try {
      const response = await fetch(`/api/v1/projects/${url}/tasks/${id}`);
      const task = await response.json();
      setTaskFormData({
        name: task.name,
        due_on: task.due_on,
        status: task.status,
      });
    } catch (error) {
      showErrorFlash();
    }
  };

  const handleTaskFormChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setTaskFormData({ ...taskFormData, [name]: value });
  };

  const patchTask = async (id: number) => {
    try {
      const response = await fetch(`/api/v1/projects/${url}/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({ task: taskFormData }),
      });
      if (response.ok) {
        const updatedTask: TaskType = await response.json();
        setTasks(tasks.map(task => {
          if (task.id === updatedTask.id) return updatedTask;

          return task;
        }));
        showNoticeFlash('タスクを更新しました。');

        return;
      }

      const errorMessages = await response.json();
      setFormErrors(errorMessages);
      showErrorFlash('タスクの更新に失敗しました');
    } catch (error) {
      showErrorFlash();
    }
  };

  const resetTaskFormData = () => {
    setTaskFormData(initialTaskFormData);
  };

  const removeFormErrors = () => {
    setFormErrors(initialFormErrors);
  };

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
            tasks={tasks}
            newTaskFormData={newTaskFormData}
            taskFormData={taskFormData}
            newFormErrors={newFormErrors}
            formErrors={formErrors}
            buildTaskFormData={buildTaskFormData}
            handleTaskFormChange={handleTaskFormChange}
            handleNewTaskFormChange={handleNewTaskFormChange}
            handleTaskFormSubmit={handleTaskFormSubmit}
            resetTaskFormData={resetTaskFormData}
            removeFormErrors={removeFormErrors} />
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
