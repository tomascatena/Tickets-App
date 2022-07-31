import { Card, CardContent, Divider, Typography } from '@mui/material';
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

const TicketCard: React.FC<Props> = ({ ticket }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h3'>
          No. {ticket.ticket}
        </Typography>
      </CardContent>

      <Divider />

      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CustomBadge color='warning'>
          Agent: {ticket.agent}
        </CustomBadge>

        <CustomBadge color='secondary'>
          Desk: {ticket.desk}
        </CustomBadge>
      </CardContent>
    </Card>);
};

export default TicketCard;
