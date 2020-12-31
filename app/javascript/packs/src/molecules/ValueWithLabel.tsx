import React, { FC } from 'react';
import { Txt } from '../atoms/Txt';
import styled from 'styled-components';

interface ValueWithLabelProps {
  label: string;
  value: string;
}

export const ValueWithLabel: FC<ValueWithLabelProps> = props => {
  const { label, value } = props;

  return (
    <Wrapper>
      <StyledLabelTxt>
        {label}：
      </StyledLabelTxt>
      <StyledValueTxt>
        {value}
      </StyledValueTxt>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const StyledLabelTxt = styled(Txt)`
  min-width: 88px;
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 767px) {
    min-width: 80px;
    font-size: 16px;
  }
`;

const StyledValueTxt = styled(Txt)`
  font-size: 18px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;
