import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DrawerHeader } from '../../Components/CustomDrawer/CustomDrawer.styled';
import { Main } from './HomePage.styled';
import { UIContext } from '../../context/UIContext';
import AppBar from '../../Components/AppBar/AppBar';
import Box from '@mui/material/Box';
import CreateTicketPage from '../CreateTicketPage/CreateTicketPage';
import CustomDrawer from '../../Components/CustomDrawer/CustomDrawer';
import DeskPage from '../DeskPage/DeskPage';
import EnterPage from '../EnterPage/EnterPage';
import QueuePage from '../QueuePage/QueuePage';
import React from 'react';

const DRAWER_WIDTH = 240;

const HomePage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { isMenuHidden } = React.useContext(UIContext)!;

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        {
          !isMenuHidden && (
            <>
              <AppBar
                title='Tickets App'
                drawerWidth={DRAWER_WIDTH}
                isOpen={isOpen}
                handleDrawerOpen={handleDrawerOpen}
              />

              <CustomDrawer
                drawerWidth={DRAWER_WIDTH}
                isOpen={isOpen}
                handleDrawerClose={handleDrawerClose}
              />
            </>
          )
        }

        <Main
          drawerWidth={DRAWER_WIDTH}
          open={isOpen}
        >
          <DrawerHeader />

          <Routes>
            <Route
              path="/enter"
              element={<EnterPage />}
            />

            <Route
              path="/queue"
              element={<QueuePage />}
            />

            <Route
              path="/create-ticket"
              element={<CreateTicketPage />}
            />

            <Route
              path="/desk"
              element={<DeskPage />}
            />

            <Route
              path="*"
              element={
                <Navigate
                  to="/enter"
                  replace
                />
              }
            />
          </Routes>
        </Main>
      </Box >
    </BrowserRouter >
  );
};

export default HomePage;
