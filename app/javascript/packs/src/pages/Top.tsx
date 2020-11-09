import React, { FC } from 'react';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { H1 } from '../atoms/Heading';
import styled from 'styled-components';

export const Top: FC = () => {
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
