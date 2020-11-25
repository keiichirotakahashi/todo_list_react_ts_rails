import React, { FC } from 'react';
import { ProjectType } from '../pages/TopPage';
import { Link } from 'react-router-dom';
import { Card } from '../atoms/Card';
import { H2 } from '../atoms/Heading';
import { More } from '../molecules/More';
import styled from 'styled-components';

interface ProjectCardProps {
  projectData: ProjectType;
}

export const ProjectCard: FC<ProjectCardProps> = props => {
  const { name, url } = props.projectData;

  return (
    <Card>
      <StyledLink to={`/app/projects/${url}`}>
        <H2>{name}</H2>
      </StyledLink>
      <MoreWrapper>
        <More />
      </MoreWrapper>
    </Card>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoreWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 8px;
`;
