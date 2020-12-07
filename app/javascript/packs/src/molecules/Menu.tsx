import React, { FC } from 'react';
import { Txt } from '../atoms/Txt';
import styled from 'styled-components';

interface MenuProps {
  id: number;
  handleClickEditProject: () => void;
  removeProject: (id: number) => void;
}

export const Menu: FC<MenuProps> = props => {
  const { id, handleClickEditProject, removeProject } = props;

  return (
    <Wrapper>
      <TxtWrapper
        onClick={handleClickEditProject}>
        <StyledTxt>編集</StyledTxt>
      </TxtWrapper>
      <TxtWrapper
        onClick={() => {removeProject(id)}}>
        <StyledTxt>削除</StyledTxt>
      </TxtWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  color: #666;
  width: 66px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  padding: 5px 0;
`;

const TxtWrapper = styled.div`
  padding: 6px 0;
  &:hover {
    background: #f2f2f2;
  }
`;

const StyledTxt = styled(Txt)`
  text-align: center;
`;
