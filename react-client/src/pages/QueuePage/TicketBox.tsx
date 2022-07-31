import { Box, Typography } from '@mui/material';
import { CustomBadge } from './CustomBadge';
import React from 'react';

type Ticket = {
  ticket: number;
  agent: string;
  desk: number;
};

type Props = {
  ticket: Ticket;
};

const TicketBox: React.FC<Props> = ({ ticket }) => {
  return (
    <>
      <Typography sx={{ mb: 2 }}>Ticket No: {ticket.ticket}</Typography>

      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ marginRight: 3 }}>
          Desk No: <CustomBadge color='secondary'>{ticket.desk}</CustomBadge>
        </Typography>

        <Typography>
          Agent: <CustomBadge color='warning'>{ticket.agent}</CustomBadge>
        </Typography>
      </Box>
    </>
  );
};

export default TicketBox;
