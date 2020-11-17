import React, { FC, useState, useEffect } from 'react';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { Projects } from '../organisms/Projects';
import styled from 'styled-components';

export const TopPage: FC = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let unmounted = false;

    const getProjects = async () => {
      try {
        const response = await fetch('/api/v1/projects');
        const json = await response.json();
        if (!unmounted) setProjects(json);
      } catch(error) {
        console.log('error');
      }
    };
    getProjects();

    const cleanup = () => { unmounted = true };

    return cleanup;
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <Projects projects={projects} />
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
