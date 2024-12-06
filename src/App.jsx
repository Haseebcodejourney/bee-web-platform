import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/MainPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import GlobalStyles from './style/common/GlobalStyles';
import HivePage from './pages/HivePage';
import BeePage from './pages/BeePage';
import DiseasePage from './pages/DiseasePage';
import WeightPage from './pages/WeightPage';
import LivePage from './pages/LivePage';
import SideBar from './components/SideBar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<MainPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
