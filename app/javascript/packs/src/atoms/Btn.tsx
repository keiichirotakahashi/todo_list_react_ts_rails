import React, { FC } from 'react';
import styled from 'styled-components';

interface BtnProps {
  children: React.ReactNode;
}

export const Btn: FC<BtnProps> = props => {
  const { children } = props;

  return (
    <StyledBtn>{children}</StyledBtn>
  );
};

const StyledBtn = styled.button`
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
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
  &:focus {
    outline: 0;
  }
`;
