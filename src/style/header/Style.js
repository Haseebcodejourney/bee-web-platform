// src/components/Header/Header.styles.js
import styled from 'styled-components';

export const Container = styled.div`
 background: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};  /* Adjust background color */
  padding: 0 30px;
  min-height: 73px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: ${({ isCollapsed }) => (isCollapsed ? 'calc(100% - 60px)' : 'calc(100% - 260px)')};
  display: inline-block;
  z-index: 99;
  margin: 0;
  transition: width 0.3s ease;
  margin-right: 0;
  margin-left: auto;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')}; /* Change text color */
    /* Conditional shadow based on the theme */
    box-shadow: ${({ theme }) => theme === 'light' ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : '0px 4px 6px rgba(255, 255, 255, 0.2)'};
  transition: all 0.3s ease-in-out;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`;

export const Left = styled.div`

`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ModeWrapper = styled.div`

`;

export const NotificationWrapper = styled.div`
    cursor: pointer;
    width: 33px;
    height: 33px;
    color: #fff !important;
    background-color: #6f2036 !important;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ExpandWrapper = styled.div`
   width: 33px;
   height: 33px;
   display: flex;
align-items: center;
justify-content: center;

`;

export const Figure = styled.figure`
    margin: 0px;
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
`;

export const UserWrapper = styled.div`
color: hsla(220, 20%, 25%, 0.6);
`;

export const Icon = styled.div`

`;

export const Title = styled.h2`
    font-size: 35px;
    color: ${({ theme }) => (theme === 'light' ? '#6f2036' : '#fff')};
    margin: 0;
`;

export const ToggleButtonWrapper = styled.div`
 background-color: transparent;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
  cursor: pointer;
  transition: color 0.3s ease;
    background-color: transparent;
    border-color: #05bbc9;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
 
`;

export const Paper = styled.span`
        width: 33px;
        height: 33px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.125);
        /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); */
        color: #fff;
        padding: 3px 3px;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            /* color: #6f2036; */
            color: ${({ theme }) => (theme === 'light' ? '#6f2036' : '#fff')};
            fill: #6f2036;
            width: 18px;
        }
`;
