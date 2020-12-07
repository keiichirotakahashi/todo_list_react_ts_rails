import React, { FC } from 'react';
import styled from 'styled-components';

interface TxtProps {
  dataLevel?: '' | 'notice' | 'error';
  children: React.ReactNode;
  className?: string;
}

export const Txt: FC<TxtProps> = props => {
  const { dataLevel, children, className } = props;

  return (
    <StyledTxt data-level={dataLevel} className={className}>
      {children}
    </StyledTxt>
  );
};

const StyledTxt = styled.p`
  font-size: 16px;
  font-weight: normal;
  &[data-level='notice'] {
    background-color: #d9edf7;
    color: #31708f;
    border-color: #bcdff1;
  }
  &[data-level='error'] {
    background-color: #f2dede;
    color: #a94442;
    border-color: #ebcccc;
  }
`;
