"use client";

import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo className="box" href="/">
        ASAP
      </Logo>
      <Nav>
        <a href="/nike">Nike</a>
      </Nav>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100vw;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 440px;
  position: fixed;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.4);
  border-bottom: rgba(255, 255, 255, 0.24);
  gap: 100px;
`;

const Logo = styled.a`
  font-size: 16px;
  font-weight: 900;
`;

const Nav = styled.nav`
  display: flex;
  gap: 100px;
  font-size: 12px;
  font-weight: 400;
`;

export default Header;
