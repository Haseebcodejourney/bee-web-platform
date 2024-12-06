import React from 'react';
import styled from 'styled-components';

// Styled components for the Header
const HeaderContainer = styled.div`
  background: #fff;
  padding: 0 30px;
  min-height: 73px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: ${({ isCollapsed }) => (isCollapsed ? 'calc(100% - 60px)' : 'calc(100% - 260px)')}; /* Adjust based on collapse state */
  display: inline-block;
  z-index: 99;
  margin: 0;
  transition: width 0.3s ease; /* Smooth transition for width */
  margin-right: 0;
  margin-left: auto;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;


const Header = ({ isCollapsed }) => {
  return (
    <HeaderContainer isCollapsed={isCollapsed}>
      <HeaderTitle></HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
