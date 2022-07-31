import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { SocketContext } from '../../context/SocketContext';
import { Ticket } from '../../typings/typings';
import { getLastAssignedTickets } from '../../helpers/getLastAssignedTickets';
import { useHideMenu } from '../../hooks/useHideMenu';
import React from 'react';
import TicketBox from './TicketBox';
import TicketCard from './TicketCard';

type Props = {};

const QueuePage: React.FC<Props> = () => {
  useHideMenu({ shouldHideMenu: true });

  const [tickets, setTickets] = React.useState<Ticket[] | null>(null);

  React.useEffect(() => {
    getLastAssignedTickets().then(setTickets);
  }, []);

  const { socket } = React.useContext(SocketContext)!;

  React.useEffect(() => {
    socket.on('ticket-assigned', (lastTickets: Ticket[]) => {
      setTickets(lastTickets);
    });

    return () => {
      socket.off('ticket-assigned');
    };
  }, [socket]);

  return (
    <Container>
      <Typography variant='h4'>Tickets Queue</Typography>

      {
        tickets ? (
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
            >
              {tickets.slice(0, 3).map((ticket) => (
                <Box
                  key={ticket.id}
                  sx={{ mt: 4 }}
                >
                  <TicketCard
                    ticket={ticket}
                  />
                </Box>
              ))}
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
            >
              <Divider>
                <Typography variant='h6'>
                  History
                </Typography>
              </Divider>

              {
                tickets.slice(3, 8).map((ticket) => (
                  <Box key={ticket.id}>
                    <Box sx={{ mt: 4 }}>
                      <TicketBox ticket={ticket} />
                    </Box>

                    <Divider sx={{ mt: 4 }} />
                  </Box>
                ))
              }
            </Grid>
          </Grid>
        ) : (
          <Typography variant='h5'>
            Loading...
          </Typography>
        )
      }
    </Container >
  );
};

export default QueuePage;
