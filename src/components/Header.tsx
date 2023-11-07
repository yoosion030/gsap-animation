"use client";

import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo className="box">나이키</Logo>
      <p>.</p>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 70px;
  justify-content: space-between;
  position: fixed;
  z-index: 50;
  background-color: #ffffff;
`;

const Logo = styled.h2`
  font-size: 32px;
  font-weight: 900;
`;

export default Header;
