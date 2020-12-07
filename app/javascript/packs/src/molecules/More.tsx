import React, { FC } from 'react';
import { Img } from '../atoms/Img';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const IconMore = require('images/icon_more.png');

interface MoreProps {
  handleMouseEnterMore: () => void;
  handleMouseLeaveMore: () => void;
}

export const More: FC<MoreProps> = props => {
  const { handleMouseEnterMore, handleMouseLeaveMore } = props;

  return (
    <StyledMore
      onMouseEnter={handleMouseEnterMore}
      onMouseLeave={handleMouseLeaveMore}>
      <Img src={IconMore} alt='icon_more' />
    </StyledMore>
  );
};

const StyledMore = styled.div`
  width: 32px;
  height: 32px;
  &:hover {
    opacity: 0.6;
  }
`;
