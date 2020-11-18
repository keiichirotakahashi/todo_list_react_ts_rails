import React, { FC, useState } from 'react';
import { Card } from '../atoms/Card';
import { H2 } from '../atoms/Heading';
import { Modal } from '../molecules/Modal';
import styled from 'styled-components';

export const ProjectNewCard: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickNew = () => {
    setIsModalOpen(true);
  };

  const handleClickModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Card>
      <Content onClick={() => {handleClickNew()}}>
        <H2>新規作成</H2>
      </Content>
      {isModalOpen ? <Modal handleClickModalClose={handleClickModalClose} /> : null}
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
