import { Button, Grid, Palette, PaletteColor, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { getAgentFromStorage } from '../../helpers/getAgentFromStorage';
import { styled } from '@mui/material/styles';
import { useHideMenu } from '../../hooks/useHideMenu';
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

type Props = {};

interface ColorTextProps {
  color: 'success' | 'error' | 'warning' | 'info' | 'primary' | 'secondary';
  fontSize?: string;
}

const ColorText = styled('span', {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'fontSize',
})<ColorTextProps>(({ theme, color, fontSize }) => ({
  color: (theme.palette[color as keyof Palette] as PaletteColor).main,
  fontSize,
}));

const DeskPage: React.FC<Props> = () => {
  useHideMenu({ shouldHideMenu: false });

  const navigate = useNavigate();

  const { agent, hasPersistedAgent } = getAgentFromStorage();

  React.useEffect(() => {
    if (!hasPersistedAgent) {
      navigate('/enter');
    }
  }, []);

  const handleExit = () => {
    navigate('/');

    localStorage.removeItem('agent');
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
        >
          <Typography
            variant='h4'
            sx={{ mb: 3 }}
          >
            Agent: {hasPersistedAgent ? agent?.name : 'Loading...'}
          </Typography>

          <Typography
            variant='h5'
            fontWeight='light'
          >
            You are working in the desk:{' '}
            <ColorText color='success'>
              {hasPersistedAgent ? agent?.desk : 'Loading...'}
            </ColorText>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{ textAlign: 'right' }}
        >
          <Button
            color='error'
            variant='outlined'
            onClick={handleExit}
          >
            <CloseIcon />
            Exit
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={8}
        >
          <Typography
            variant='h5'
            fontWeight='bold'
          >
            You are assigned to the ticket:{' '}

            <ColorText
              color='error'
              fontSize='2rem'
            >
              5
            </ColorText>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{ textAlign: 'right' }}
        >
          <Button
            color='primary'
            variant='contained'
          >
            Next Ticket
            <ArrowRightIcon />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DeskPage;
