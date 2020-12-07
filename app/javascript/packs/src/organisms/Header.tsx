import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledNavi>
        <h1>
          <StyledLogoLink to='/app' replace>
            ToDoリスト
          </StyledLogoLink>
        </h1>
        <div>
          <StyledLogoutLink rel='nofollow' data-method='delete' href='/logout'>
            ログアウト
          </StyledLogoutLink>
        </div>
      </StyledNavi>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #fff0dc;
  height: 60px;
  @media screen and (max-width: 767px) {
    height: 50px;
  }
`;

const StyledNavi = styled.div`
  height: 100%;
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(Link)`
  display: block;
  height: 100%;
  color: #e4996d;
  font-size: 24px;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

const StyledLogoutLink = styled.a`
  color: #e4996d;
  font-size: 16px;
  font-weight: bold;
`;
