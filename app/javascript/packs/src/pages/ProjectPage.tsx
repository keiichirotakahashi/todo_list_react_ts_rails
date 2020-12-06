import React, { FC, useState, useEffect } from 'react';
import { FlashType } from '../App';
import { useParams } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { Flash } from '../molecules/Flash';
import { H1 } from '../atoms/Heading';
import styled from 'styled-components';

interface ProjectPageProps {
  flash: FlashType;
  showErrorFlash: (message?: string) => void;
}

export const ProjectPage: FC<ProjectPageProps> = props => {
  const { flash, showErrorFlash } = props;
  const { url } = useParams<{url: string}>();
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    let unmounted = false;

    const getProject = async () => {
      try {
        const response = await fetch(`/api/v1/projects/${url}`);
        const json = await response.json();
        if (!unmounted) setProjectName(json.name);
      } catch (error) {
        showErrorFlash();
      }
    };
    getProject();

    const cleanup = () => { unmounted = true };

    return cleanup;
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <Flash isVisible={flash.isVisible} status={flash.status}>
          {flash.message}
        </Flash>
        <Content>
          <H1>
            {projectName}
          </H1>
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
