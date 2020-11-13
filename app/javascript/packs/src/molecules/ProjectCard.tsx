import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { H2 } from '../atoms/Heading';
import { More } from '../molecules/More';
import styled from 'styled-components';

interface Project {
  id: number;
  name: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}

interface ProjectCardProps {
  projectData: Project;
}

export const ProjectCard: FC<ProjectCardProps> = props => {
  const { name, url } = props.projectData;

  return (
    <Wrapper>
      <StyledLink to={`/projects/${url}`}>
        <H2>{name}</H2>
      </StyledLink>
      <MoreWrapper>
        <More />
      </MoreWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: #fff;
  width: 160px;
  height: 160px;
  border-radius: 30px;
  margin: 0 15px 30px;
  cursor: pointer;
  &:hover {
    background: #fafafa;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    border-radius: 10px;
    padding: 15px;
    margin: 0 0 20px;
  }
`;

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
