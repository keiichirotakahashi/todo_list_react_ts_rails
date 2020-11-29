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
  handleProjectFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleProjectFormSubmit: (event: FormEvent, id?: number) => void;
  resetProjectFormData: () => void;
  removeFormErrors: () => void;
}

export const Projects: FC<ProjectsProps> = props => {
  const {
    projects,
    projectFormData,
    formErrors,
    handleProjectFormChange,
    handleProjectFormSubmit,
    resetProjectFormData,
    removeFormErrors,
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
            <ProjectCard projectData={project} key={project.id} />
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
