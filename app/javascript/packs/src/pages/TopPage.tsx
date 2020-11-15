import React, { FC, useState, useEffect } from 'react';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { ProjectCard } from '../molecules/ProjectCard';
import { H1 } from '../atoms/Heading';
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
