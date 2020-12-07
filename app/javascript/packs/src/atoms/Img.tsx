import React, { FC } from 'react';
import styled from 'styled-components';

interface ImgProps {
  src: string;
  alt: string;
}

export const Img: FC<ImgProps> = props => {
  const { src, alt } = props;

  return <StyledImg src={src} alt={alt} />;
};

const StyledImg = styled.img`
  width: 100%;
`;
