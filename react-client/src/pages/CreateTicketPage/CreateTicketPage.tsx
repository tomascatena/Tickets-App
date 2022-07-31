import { Box } from '@mui/system';
import { Button, Container, Palette, PaletteColor, Typography } from '@mui/material';
import { SocketContext } from '../../context/SocketContext';
import { Ticket } from '../../typings/typings';
import { styled } from '@mui/material/styles';
import { useHideMenu } from '../../hooks/useHideMenu';
import React from 'react';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

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

type Props = {};

const CreateTicketPage: React.FC<Props> = () => {
  useHideMenu({ shouldHideMenu: true });

  const { socket } = React.useContext(SocketContext)!;

  const [ticket, setTicket] = React.useState<Ticket | null>(null);

  const handleGetTicket = () => {
    socket.emit('get-ticket', null, (ticket: Ticket) => {
      setTicket(ticket);
    });
  };

  return (
    <Container>
      <Typography
        variant='h4'
        textAlign='center'
      >
        Press the button to get a new ticket
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3rem',
        }}
      >
        <Button
          variant='outlined'
          sx={{ borderRadius: '100rem', padding: '1rem 2rem' }}
          onClick={handleGetTicket}
        >
          <Typography
            variant='h5'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textTransform: 'none',
            }}
          >
            <SystemUpdateAltIcon
              sx={{
                marginRight: '0.5rem',
              }}
            />
            Get a new ticket
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: '5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {
          ticket && (
            <>
              <Typography variant='h6'>
                Your Number
              </Typography>

              <ColorText
                fontSize='3rem'
                color='success'
              >
                {ticket ? ticket?.ticketNumber : 'Loading...'}
              </ColorText>
            </>
          )
        }
      </Box>
    </Container >
  );
};

export default CreateTicketPage;
