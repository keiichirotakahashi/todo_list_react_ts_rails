import React, { FC } from 'react';
import { Card } from '../atoms/Card';
import { H2 } from '../atoms/Heading';
import styled from 'styled-components';

export const ProjectNewCard: FC = () => {
  return (
    <Card>
      <Content>
        <H2>新規作成</H2>
      </Content>
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
