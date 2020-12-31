import React, { FC } from 'react';
import { Img } from '../atoms/Img';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const IconClose = require('images/icon_close.png');

interface CloseProps {
  handleClickModalClose: () => void;
}

export const Close: FC<CloseProps> = props => {
  const { handleClickModalClose } = props;

  return (
    <StyledClose onClick={handleClickModalClose}>
      <Img src={IconClose} alt='icon_close' />
    </StyledClose>
  );
};

const StyledClose = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
