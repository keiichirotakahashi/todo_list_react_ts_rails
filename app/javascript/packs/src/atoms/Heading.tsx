import React, { FC } from 'react';
import styled from 'styled-components';

interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
}

export const H1: FC<HeadingProps> = props => {
  const { children, className } = props;

  return (
    <StyledHeading1 className={className}>
      {children}
    </StyledHeading1>
  );
};

export const H2: FC<HeadingProps> = props => {
  const { children, className } = props;

  return (
    <StyledHeading2 className={className}>
      {children}
    </StyledHeading2>
  );
};

const StyledHeading1 = styled.h1`
  color: #474ba5;
  font-size: 20px;
  font-weight: bold;
`;

const StyledHeading2 = styled.h2`
  color: #666;
  font-size: 16px;
  font-weight: normal;
  padding: 20px;
  word-break: break-all;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
