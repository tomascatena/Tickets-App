import SocketIO from 'socket.io';
import { Ticket } from './Ticket';
import { TicketList } from './TicketList';

export type SocketsConfig = {
  io: SocketIO.Server;
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
        console.log('get-ticket');
        const newTicket = this.ticketList.createTicket();

        cb(newTicket);
      });
    });
  }
}
