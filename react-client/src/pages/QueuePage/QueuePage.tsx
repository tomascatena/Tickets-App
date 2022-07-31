import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { useHideMenu } from '../../hooks/useHideMenu';
import React from 'react';
import TicketBox from './TicketBox';
import TicketCard from './TicketCard';

const TICKETS = [
  {
    ticket: 33,
    desk: 3,
    agent: 'Fernando Herrera'
  },
  {
    ticket: 34,
    desk: 4,
    agent: 'Melissa Flores'
  },
  {
    ticket: 35,
    desk: 5,
    agent: 'Carlos Castro'
  },
  {
    ticket: 36,
    desk: 3,
    agent: 'Fernando Herrera'
  },
  {
    ticket: 37,
    desk: 3,
    agent: 'Fernando Herrera'
  },
  {
    ticket: 38,
    desk: 2,
    agent: 'Melissa Flores'
  },
  {
    ticket: 39,
    desk: 5,
    agent: 'Carlos Castro'
  },
];

type Props = {};

const QueuePage: React.FC<Props> = () => {
  useHideMenu({ shouldHideMenu: true });

  return (
    <Container>
      <Typography variant='h4'>Tickets Queue</Typography>

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
          {TICKETS.slice(0, 3).map((ticket) => (
            <Box
              key={ticket.ticket}
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
            TICKETS.slice(3).map((ticket) => (
              <Box key={ticket.ticket}>
                <Box sx={{ mt: 4 }}>
                  <TicketBox ticket={ticket} />
                </Box>

                <Divider sx={{ mt: 4 }} />
              </Box>
            ))
          }
        </Grid>
      </Grid>
    </Container>
  );
};

export default QueuePage;
