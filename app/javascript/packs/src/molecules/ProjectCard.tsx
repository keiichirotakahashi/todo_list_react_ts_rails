import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { ProjectType } from '../pages/TopPage';
import { Link } from 'react-router-dom';
import { Card } from '../atoms/Card';
import { H2 } from '../atoms/Heading';
import { More } from '../molecules/More';
import { Menu } from '../molecules/Menu';
import { Modal } from '../molecules/Modal';
import { ProjectForm } from '../molecules/ProjectForm';
import { ProjectFormDataType } from '../pages/TopPage';
import styled from 'styled-components';

interface ProjectCardProps {
  projectData: ProjectType;
  projectFormData: ProjectFormDataType;
  formErrors: string[];
  buildProjectFormData: (url: string) => void;
  handleProjectFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleProjectFormSubmit: (id?: number) => (event: FormEvent) => void;
  resetProjectFormData: () => void;
  removeFormErrors: () => void;
  removeProject: (id: number) => void;
}

export const ProjectCard: FC<ProjectCardProps> = props => {
  const {
    projectData,
    projectFormData,
    formErrors,
    buildProjectFormData,
    handleProjectFormChange,
    handleProjectFormSubmit,
    resetProjectFormData,
    removeFormErrors,
    removeProject,
  } = props;
  const { id, name, url } = projectData;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleMouseEnterMore = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeaveMore = () => {
    setIsMenuOpen(false);
  }

  const handleClickEditProject = () => {
    setIsModalOpen(true);
    buildProjectFormData(url);
  };

  const handleClickModalClose = () => {
    setIsModalOpen(false);
    resetProjectFormData();
    removeFormErrors();
  };

  return (
    <Card>
      <StyledLink to={`/app/projects/${url}`}>
        <H2>{name}</H2>
      </StyledLink>
      <MoreWrapper>
        <More
          handleMouseEnterMore={handleMouseEnterMore}
          handleMouseLeaveMore={handleMouseLeaveMore} />
      </MoreWrapper>
      {
        isMenuOpen ? (
          <MenuWrapper
            onMouseEnter={handleMouseEnterMore}
            onMouseLeave={handleMouseLeaveMore}>
            <Menu
              id={id}
              handleClickEditProject={handleClickEditProject}
              removeProject={removeProject} />
          </MenuWrapper>
        ) : null
      }
      {
        isModalOpen ? (
          <Modal handleClickModalClose={handleClickModalClose}>
            <ProjectForm
              id={id}
              formName='プロジェクトを更新する'
              buttonText='保存'
              projectFormData={projectFormData}
              formErrors={formErrors}
              handleProjectFormChange={handleProjectFormChange}
              handleProjectFormSubmit={handleProjectFormSubmit} />
          </Modal>
        ) : null
      }
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

const MenuWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 8px;
`;
