import React, { FC } from 'react';
import styled from 'styled-components';

interface TagProps {
  children: React.ReactNode;
  status?: string;
  className?: string;
}

export const Tag: FC<TagProps> = props => {
  const { children, status, className } = props;

  return (
    <StyledTag data-status={status} className={className}>
      {children}
    </StyledTag>
  );
};

const StyledTag = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
  background: #e4996d;
  border-radius: 10px;
  &[data-status='todo'] {
    background: #eb5a46;
  }
  &[data-status='doing'] {
    background: #ebad46;
  }
  &[data-status='done'] {
    background: #0079bf;
  }
`;
