import React, { FC } from 'react';
import styled from 'styled-components';

interface HeadingProps {
  children?: React.ReactNode;
}

export const H1: FC<HeadingProps> = props => {
  const { children } = props;

  return (
    <StyledHeading1>{children}</StyledHeading1>
  );
};

const StyledHeading1 = styled.h1`
  color: #474ba5;
  font-size: 20px;
  font-weight: bold;
`;
