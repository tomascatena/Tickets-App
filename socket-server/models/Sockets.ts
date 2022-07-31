import SocketIO from 'socket.io';
import { TicketList } from './TicketList';

export type SocketsConfig = {
  io: SocketIO.Server;
};

type Agent = {
  name: string;
  desk: number | string;
};

export class Sockets {
  io: SocketIO.Server;
  ticketList: TicketList;

  constructor(socketsConfig: SocketsConfig) {
    this.io = socketsConfig.io;

    this.ticketList = new TicketList();
  }

  socketsEvents() {
    this.io.on('connection', (socket) => {
      console.log('New client connected', socket.id);

      socket.on('get-ticket', (_, cb) => {
        const newTicket = this.ticketList.createTicket();

        cb(newTicket);
      });

      socket.on('agent-next-ticket', ({ name, desk }, cb) => {
        const assignedTicket = this.ticketList.assignTicket(name, desk);

        console.log('Agent next ticket', assignedTicket);

        cb(assignedTicket);

        this.io.emit('ticket-assigned', this.ticketList.lastAssignedTickets);
      });
    });
  }
}
