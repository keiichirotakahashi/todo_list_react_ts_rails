import React, { FC } from 'react';
import styled from 'styled-components';

interface CardProps {
  children?: React.ReactNode;
}

export const Card: FC<CardProps> = props => {
  const { children } = props;

  return (
    <StyledCard>{children}</StyledCard>
  );
};

const StyledCard = styled.div`
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
