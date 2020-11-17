import React, { FC } from 'react';
import { ProjectType, ProjectCard } from '../molecules/ProjectCard';
import { H1 } from '../atoms/Heading';
import styled from 'styled-components';

interface ProjectsProps {
  projects: ProjectType[];
}

export const Projects: FC<ProjectsProps> = props => {
  const { projects } = props;

  return (
    <>
      <StyldHeadingWrapper>
        <H1>
          プロジェクト一覧
        </H1>
      </StyldHeadingWrapper>
      <StyldProjectCardsWrapper>
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
