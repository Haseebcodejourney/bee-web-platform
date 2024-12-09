// src/components/Header/Header.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons
import { useTheme } from '../context/ThemeContext'; // Assuming you have ThemeContext setup for managing dark/light mode
import { Container, ExpandWrapper, Icon, Left, ModeWrapper, NotificationWrapper, Right, Title, UserWrapper, Wrapper, ToggleButtonWrapper, Paper, Figure, Image } from '../style/header/Style'; // Adjust import path to your style file
import NotificationsIcon from '@mui/icons-material/Notifications';
import AllOutIcon from '@mui/icons-material/AllOut';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({ isCollapsed }) => {
  const { theme, toggleTheme } = useTheme(); // Using theme and toggleTheme from context

  return (
    <Container isCollapsed={isCollapsed}  theme={theme}>
      <Wrapper>
        <Left>
          <Title>Bee Keeping</Title>
        </Left>
        <Right>
          <ModeWrapper>
          <ToggleButtonWrapper theme={theme} onClick={toggleTheme}>
             <Paper> {theme === 'light' ? <FaMoon /> : <FaSun />}</Paper> {/* Toggle between moon and sun icons */}
            </ToggleButtonWrapper>
          </ModeWrapper>
          <NotificationWrapper>
            <Icon><NotificationsIcon/></Icon>
          </NotificationWrapper>
          <ExpandWrapper><AllOutIcon /></ExpandWrapper>
          <UserWrapper><AccountCircleIcon style={{ fontSize: '48px', color: '#6f2036' }}/></UserWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
