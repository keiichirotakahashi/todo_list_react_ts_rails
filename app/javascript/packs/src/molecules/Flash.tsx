import React, { FC } from 'react';
import { Txt } from '../atoms/Txt';
import styled from 'styled-components';

interface FlashProps {
  isVisible: boolean;
  status: '' | 'notice' | 'error';
  children?: React.ReactNode;
}

export const Flash: FC<FlashProps> = props => {
  const { isVisible, status, children } = props;

  return (
    <>
      {
        isVisible ? (
          <Wrapper>
            <StyledTxt dataLevel={status}>
              {children}
            </StyledTxt>
          </Wrapper>
        ) : ''
      }
    </>
  );
};

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  top: 30px;
  width: 100%;
  animation: fadein 0.5s, fadeout 1.0s 2.0s;
  @keyframes fadein {
    from {top: 10px; opacity: 0;}
    to {top: 30px; opacity: 1;}
  }
  @keyframes fadeout {
    from {top: 30px; opacity: 1;}
    to {top: 10px; opacity: 0;}
  }
`;

const StyledTxt = styled(Txt)`
  width: 60%;
  min-width: 600px;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: .25rem;
  padding: 12px 18px;
  @media screen and (max-width: 767px) {
    width: 70%;
    min-width: initial;
  }
`;
