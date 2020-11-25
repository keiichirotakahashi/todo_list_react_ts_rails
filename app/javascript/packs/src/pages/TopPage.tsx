import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
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

export const TopPage: FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const initialProjectFormData: ProjectFormDataType = { name: '', url: '' };
  const [projectFormData, setProjectFormData] = useState<ProjectFormDataType>(initialProjectFormData);
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  useEffect(() => {
    let unmounted = false;

    const getProjects = async () => {
      try {
        const response = await fetch('/api/v1/projects');
        const json = await response.json();
        if (!unmounted) setProjects(json);
      } catch(error) {
        console.log('error');
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

        return;
      }

      const errorMessages = await response.json();
      console.log(errorMessages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <Projects
            projects={projects}
            projectFormData={projectFormData}
            handleProjectFormChange={handleProjectFormChange}
            handleProjectFormSubmit={handleProjectFormSubmit} />
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
