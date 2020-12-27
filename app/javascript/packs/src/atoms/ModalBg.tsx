import React, { FC } from 'react';
import styled from 'styled-components';

interface ModalBgProps {
  children?: React.ReactNode;
}

export const ModalBg: FC<ModalBgProps> = props => {
  const { children } = props;

  return(
    <StyledModalBg>{children}</StyledModalBg>
  );
};

const StyledModalBg = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: initial;
`;
