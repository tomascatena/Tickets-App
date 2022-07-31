import { SocketProvider } from './context/SocketContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage/HomePage';
import React from 'react';
import UIProvider from './context/UIContext';
import darkTheme from './themes/darkTheme';

const TicketsApp: React.FC = () => {
  return (
    <SocketProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />

          <HomePage />
        </ThemeProvider>
      </UIProvider>
    </SocketProvider>
  );
};

export default TicketsApp;
