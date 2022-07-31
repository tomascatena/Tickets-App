import { IconButton, Toolbar, Typography } from '@mui/material';
import { StyledAppBar } from './AppBar.styled';
import { UIContext } from '../../context/UIContext';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

type Props = {
  drawerWidth: number;
  isOpen: boolean;
  handleDrawerOpen: () => void;
  title: string;
};

const AppBar: React.FC<Props> = ({ drawerWidth, isOpen, handleDrawerOpen, title }) => {
  const { isMenuHidden } = React.useContext(UIContext)!;

  return (
    <StyledAppBar
      drawerWidth={drawerWidth}
      position="fixed"
      open={isOpen}
    >
      <Toolbar>
        {
          !isMenuHidden && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          )
        }

        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          {title}
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
