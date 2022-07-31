import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { DrawerHeader } from './CustomDrawer.styled';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react';

type Props = {
  drawerWidth: number;
  isOpen: boolean;
  handleDrawerClose: () => void;
};

const items = [
  {
    icon: <LoginIcon />,
    text: 'Enter',
    to: '/enter'
  },
  {
    icon: <HourglassTopIcon />,
    text: 'Queue',
    to: '/queue'
  },
  {
    icon: <AddIcon />,
    text: 'Create Ticket',
    to: '/create-ticket'
  }
];

const CustomDrawer: React.FC<Props> = ({ drawerWidth, isOpen, handleDrawerClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List>
        {items.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
          >
            <ListItemButton onClick={() => navigateTo(item.to)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>);
};

export default CustomDrawer;
