import React, { FC } from 'react';
import { ModalBg } from '../atoms/ModalBg';
import { Close } from '../molecules/Close';
import styled from 'styled-components';

interface ModalProps {
  handleClickModalClose: () => void;
}

export const Modal: FC<ModalProps> = props => {
  return(
    <ModalBg>
      <CloseWrapper>
        <Close handleClickModalClose={props.handleClickModalClose} />
      </CloseWrapper>
      <ModalContent>
      </ModalContent>
    </ModalBg>
  );
};

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  max-width: 860px;
  height: 5vh;
  min-height: 40px;
  margin: 27.5vh auto 0;
  @media screen and (max-width: 767px) {
    margin: 25vh auto 0;
  }
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  min-height: 120px;
  margin: 0 auto 45vh;
  padding: 20px 30px;
  @media screen and (max-width: 767px) {
    padding: 20px 15px;
    min-height: 172px;
    margin: 0 auto 40vh;
  }
`;
