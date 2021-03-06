import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Card } from '../atoms/Card';
import { H2 } from '../atoms/Heading';
import { Modal } from '../molecules/Modal';
import { ProjectForm } from '../molecules/ProjectForm';
import { ProjectFormDataType } from '../pages/TopPage';
import styled from 'styled-components';

interface ProjectNewCardProps {
  projectFormData: ProjectFormDataType;
  formErrors: string[];
  handleProjectFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleProjectFormSubmit: (id?: number) => (event: FormEvent) => void;
  resetProjectFormData: () => void;
  removeFormErrors: () => void;
}

export const ProjectNewCard: FC<ProjectNewCardProps> = props => {
  const {
    projectFormData,
    formErrors,
    handleProjectFormChange,
    handleProjectFormSubmit,
    resetProjectFormData,
    removeFormErrors,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickNewProject = () => {
    setIsModalOpen(true);
  };

  const handleClickModalClose = () => {
    setIsModalOpen(false);
    resetProjectFormData();
    removeFormErrors();
  };

  return (
    <Card>
      <Content onClick={handleClickNewProject}>
        <H2>新規作成</H2>
      </Content>
      {isModalOpen ? (
        <Modal handleClickModalClose={handleClickModalClose}>
          <ProjectForm
            formName='プロジェクトを新規作成する'
            buttonText='作成'
            projectFormData={projectFormData}
            formErrors={formErrors}
            handleProjectFormChange={handleProjectFormChange}
            handleProjectFormSubmit={handleProjectFormSubmit} />
        </Modal>
      ) : null}
    </Card>
  );
};

const Content = styled.div`
  wifth: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
