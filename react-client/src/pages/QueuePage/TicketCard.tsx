import { Card, CardContent, Divider, Typography } from '@mui/material';
import { CustomBadge } from './CustomBadge';
import { Ticket } from '../../typings/typings';
import React from 'react';

type Props = {
  ticket: Ticket;
};

const TicketCard: React.FC<Props> = ({ ticket }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h3'>
          No. {ticket.ticketNumber}
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
