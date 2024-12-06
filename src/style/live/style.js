// src/style/login/style.js
import styled from 'styled-components';

// Styled components for styling the login page

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin: 0px auto 0 auto;
  padding-left: ${({ isCollapsed }) => (isCollapsed ? '60px' : '60px')}; /* Adjust based on collapse state */
  transition: padding-left 0.3s ease; /* Smooth transition */
  
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
`;

export const LiveWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: auto;  /* Adjust the height as necessary */
  position: relative;
  border-radius: 8px;  /* Optional: Adds rounded corners */
  overflow: hidden;  /* Ensures content stays inside the container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Box shadow for visual effect */
  max-width: 1240px;
  margin-bottom: 72px;
  
`;

export const Text = styled.h2`
    background: #fff;
    width: 100%;
    padding: 15px 15px;
    color: #6f2036;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Box shadow at the bottom */
`;



