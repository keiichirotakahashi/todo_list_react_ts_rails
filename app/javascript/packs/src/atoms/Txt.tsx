import React, { FC } from 'react';
import styled from 'styled-components';

interface TxtProps {
  children: React.ReactNode;
  className?: string;
}

export const Txt: FC<TxtProps> = props => {
  const { children, className } = props;

  return (
    <StyledTxt className={className}>{children}</StyledTxt>
  );
};

const StyledTxt = styled.p`
  font-size: 16px;
  font-weight: normal;
`;
