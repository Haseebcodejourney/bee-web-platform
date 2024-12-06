// SidebarStyles.js
import styled from 'styled-components';


// Sidebar styled components
export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-right: 18px;
  padding-left: 18px;
  z-index: 1000;
  height: 100%;
  background: #ffffff;
  color: #6f2036;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  width: ${({ isCollapsed }) => (isCollapsed ? '60px' : '260px')}; /* Conditional width */
  transition: width 0.3s ease-in-out; /* Smooth transition for width change */
`;


export const SideBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 80px;
`;

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  margin: 0px;
  padding: 15px 15px;
  line-height: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s all;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;
  width: 100%;
  &:hover {
    background-color: #6f2036;
    color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Adding shadow */
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

`;

export const Paper = styled.span`
  display: flex;
  align-items: center;
`;