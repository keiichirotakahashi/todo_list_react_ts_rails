import React, { FC, ChangeEvent, FormEvent } from 'react';
import { ProjectType } from '../pages/TopPage';
import { ProjectFormDataType } from '../pages/TopPage';
import { ProjectCard } from '../molecules/ProjectCard';
import { ProjectNewCard } from '../molecules/ProjectNewCard';
import { H1 } from '../atoms/Heading';
import styled from 'styled-components';

interface ProjectsProps {
  projects: ProjectType[];
  projectFormData: ProjectFormDataType;
  formErrors: string[];
  buildProjectFormData: (url: string) => void;
  handleProjectFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleProjectFormSubmit: (id?: number) => (event: FormEvent) => void;
  resetProjectFormData: () => void;
  removeFormErrors: () => void;
  removeProject: (id: number) => void;
}

export const Projects: FC<ProjectsProps> = props => {
  const {
    projects,
    projectFormData,
    formErrors,
    buildProjectFormData,
    handleProjectFormChange,
    handleProjectFormSubmit,
    resetProjectFormData,
    removeFormErrors,
    removeProject,
  } = props;

  return (
    <>
      <StyldHeadingWrapper>
        <H1>
          プロジェクト一覧
        </H1>
      </StyldHeadingWrapper>
      <StyldProjectCardsWrapper>
        <ProjectNewCard
          projectFormData={projectFormData}
          formErrors={formErrors}
          handleProjectFormChange={handleProjectFormChange}
          handleProjectFormSubmit={handleProjectFormSubmit}
          resetProjectFormData={resetProjectFormData}
          removeFormErrors={removeFormErrors} />
        {projects.length > 0 ? (
          projects.map(project => (
            <ProjectCard
              projectData={project}
              projectFormData={projectFormData}
              formErrors={formErrors}
              buildProjectFormData={buildProjectFormData}
              handleProjectFormChange={handleProjectFormChange}
              handleProjectFormSubmit={handleProjectFormSubmit}
              resetProjectFormData={resetProjectFormData}
              removeFormErrors={removeFormErrors}
              removeProject={removeProject}
              key={project.id} />
          ))
        ) : null}
      </StyldProjectCardsWrapper>
    </>
  );
};

const StyldHeadingWrapper = styled.div`
  margin-bottom: 16px;
`;

const StyldProjectCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  @media screen and (max-width: 767px) {
    margin: 0;
  }
`;
