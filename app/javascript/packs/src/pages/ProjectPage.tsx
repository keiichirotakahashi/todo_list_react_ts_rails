import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { H1 } from '../atoms/Heading';
import styled from 'styled-components';

export const ProjectPage: FC = () => {
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
        console.log('error');
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
