import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for routing
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HiveIcon from '@mui/icons-material/Hive';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ScaleIcon from '@mui/icons-material/Scale';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import Logo from '../assets/images/neu-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Figure, Image, SidebarContainer, SideBarHeader, SidebarItem, SidebarWrapper, Toggle, Paper } from '../style/sidebar/SideBar';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Header from './Header';

const SideBar = ({ onMenuClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Handle the toggle of the sidebar (collapsed or expanded)
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>

      <Header isCollapsed={isCollapsed} />

      <SidebarContainer style={{ width: isCollapsed ? '60px' : '260px', alignItems: isCollapsed ? 'center' : 'flex-start', gap: isCollapsed ? '15px' : '0' }}>
        <SideBarHeader>
          <Figure style={{ display: isCollapsed ? 'none' : 'block' }}>
            <Image src={Logo} alt='Logo' width={200} height={200} />
          </Figure>
          <Toggle onClick={toggleSidebar}><MenuIcon /></Toggle>
        </SideBarHeader>

        <SidebarWrapper onClick={() => onMenuClick('hivePage')} style={{ padding: isCollapsed ? '5px 4px' : '15px' }}>
          <SidebarItem><HomeIcon sx={{ fontSize: 15 }} /><Paper style={{ display: isCollapsed ? 'none' : 'flex' }}>Dashboard</Paper></SidebarItem><ArrowForwardIosIcon sx={{ fontSize: 15 }} style={{ display: isCollapsed ? 'none' : 'flex' }} />
        </SidebarWrapper>

        <SidebarWrapper onClick={() => onMenuClick('hivePage')} style={{ padding: isCollapsed ? '5px 4px' : '15px' }}>
          <SidebarItem><HiveIcon sx={{ fontSize: 15 }} /><Paper style={{ display: isCollapsed ? 'none' : 'flex' }}>Hive</Paper></SidebarItem><ArrowForwardIosIcon sx={{ fontSize: 15 }} style={{ display: isCollapsed ? 'none' : 'flex' }} />
        </SidebarWrapper>

        <SidebarWrapper onClick={() => onMenuClick('bee')} style={{ padding: isCollapsed ? '5px 4px' : '15px' }}>
          <SidebarItem><EmojiNatureIcon sx={{ fontSize: 15 }} /><Paper style={{ display: isCollapsed ? 'none' : 'flex' }}>Bee</Paper></SidebarItem><ArrowForwardIosIcon sx={{ fontSize: 15 }} style={{ display: isCollapsed ? 'none' : 'flex' }} />
        </SidebarWrapper>

        <SidebarWrapper style={{ padding: isCollapsed ? '5px 4px' : '15px' }}>
          <SidebarItem><CoronavirusIcon sx={{ fontSize: 15 }} /><Paper style={{ display: isCollapsed ? 'none' : 'flex' }}>Diseases</Paper></SidebarItem><ArrowForwardIosIcon sx={{ fontSize: 15 }} style={{ display: isCollapsed ? 'none' : 'flex' }} />
        </SidebarWrapper>

        <SidebarWrapper style={{ padding: isCollapsed ? '5px 4px' : '15px' }}>
          <SidebarItem><ScaleIcon sx={{ fontSize: 15 }} /><Paper style={{ display: isCollapsed ? 'none' : 'flex' }}>Weight</Paper></SidebarItem><ArrowForwardIosIcon sx={{ fontSize: 15 }} style={{ display: isCollapsed ? 'none' : 'flex' }} />
        </SidebarWrapper>

        <SidebarWrapper onClick={() => onMenuClick('live')} style={{ padding: isCollapsed ? '5px 4px' : '15px' }}>
          <SidebarItem><SlideshowIcon sx={{ fontSize: 15 }} /><Paper style={{ display: isCollapsed ? 'none' : 'flex' }}>Live</Paper></SidebarItem><ArrowForwardIosIcon sx={{ fontSize: 15 }} style={{ display: isCollapsed ? 'none' : 'flex' }} />
        </SidebarWrapper>

      </SidebarContainer>
    </>
  );
};

export default SideBar;
