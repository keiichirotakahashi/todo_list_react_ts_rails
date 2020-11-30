import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { FlashType } from '../App';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { Flash } from '../molecules/Flash';
import { Projects } from '../organisms/Projects';
import styled from 'styled-components';

export interface ProjectType {
  id: number;
  name: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}

export interface ProjectFormDataType {
  name: string;
  url: string;
}

interface TopPageProps {
  flash: FlashType;
  showNoticeFlash: (message: string) => void;
  showErrorFlash: (message?: string) => void;
  removeFlashNow: () => void;
}

export const TopPage: FC<TopPageProps> = props => {
  const { flash, showNoticeFlash, showErrorFlash, removeFlashNow } = props;
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const initialProjectFormData: ProjectFormDataType = { name: '', url: '' };
  const [projectFormData, setProjectFormData] = useState<ProjectFormDataType>(initialProjectFormData);

  const initialFormErrors: string[] = [];
  const [formErrors, setFormErrors] = useState<string[]>(initialFormErrors);

  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  useEffect(() => {
    let unmounted = false;

    const getProjects = async () => {
      try {
        const response = await fetch('/api/v1/projects');
        const json = await response.json();
        if (!unmounted) setProjects(json);
      } catch(error) {
        showErrorFlash();
      }
    };
    getProjects();

    const cleanup = () => { unmounted = true };

    return cleanup;
  }, []);

  const handleProjectFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProjectFormData({ ...projectFormData, [name]: value });
  };

  const handleProjectFormSubmit = (event: FormEvent, id?: number) => {
    event.preventDefault();
    setFormErrors(initialFormErrors);
    removeFlashNow();
    if (id) return;
    postProject();
  };

  const postProject = async () => {
    try {
      const response = await fetch('/api/v1/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({ project: projectFormData }),
      });

      if (response.ok) {
        const newProject: ProjectType = await response.json();
        projects.unshift(newProject);
        setProjects(projects);
        setProjectFormData(initialProjectFormData);
        showNoticeFlash('プロジェクトを作成しました。');

        return;
      }

      const errorMessages = await response.json();
      setFormErrors(errorMessages);
      showErrorFlash('プロジェクトの作成に失敗しました。');
    } catch (error) {
      showErrorFlash();
    }
  };

  const resetProjectFormData = () => {
    setProjectFormData(initialProjectFormData);
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
          <Projects
            projects={projects}
            projectFormData={projectFormData}
            formErrors={formErrors}
            handleProjectFormChange={handleProjectFormChange}
            handleProjectFormSubmit={handleProjectFormSubmit}
            resetProjectFormData={resetProjectFormData}
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
