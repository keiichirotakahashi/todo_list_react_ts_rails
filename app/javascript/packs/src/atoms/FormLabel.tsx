import React, { FC } from 'react';
import styled from 'styled-components';

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const FormLabel: FC<FormLabelProps> = props => {
  const { children, className } = props;

  return <StyledFormLabel className={className}>{children}</StyledFormLabel>;
};

const StyledFormLabel = styled.div`
  min-width: 80px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;
