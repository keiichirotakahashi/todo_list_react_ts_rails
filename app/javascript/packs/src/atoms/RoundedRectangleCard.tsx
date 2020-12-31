import React, { FC } from 'react';
import styled from 'styled-components';

interface RoundedRectangleCardProps {
  children?: React.ReactNode;
}

export const RoundedRectangleCard: FC<RoundedRectangleCardProps> = props => {
  const { children } = props;

  return <StyledRoundedRectangleCard>{children}</StyledRoundedRectangleCard>;
};

const StyledRoundedRectangleCard = styled.div`
  color: #666;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px 30px;
  @media screen and (max-width: 767px) {
    padding: 20px 15px;
  }
`;
