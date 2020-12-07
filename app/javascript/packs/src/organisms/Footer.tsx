import React, { FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <StyledNavi>
        <StyledLogo>
          ToDoリスト
        </StyledLogo>
        <StyledCopyright>
          Copyright &copy;2020 Keiichiro Takahashi
        </StyledCopyright>
      </StyledNavi>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #f9e3be;
`;

const StyledNavi = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 28px 0;
  text-align: center;
  @media screen and (max-width: 767px) {
    padding: 24px 0;
  }
`;

const StyledLogo = styled.div`
  color: #474ba5;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

const StyledCopyright = styled.div`
  color: rgba(71, 75, 165, 0.6);
  font-size: 14px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
