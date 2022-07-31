import { Ticket } from './Ticket';

export class TicketList {
  lastTicketNumber: number;
  pendingTickets: Ticket[];
  inProgressTickets: Ticket[];

  constructor() {
    this.lastTicketNumber = 1;

    this.pendingTickets = [];
    this.inProgressTickets = [];
  }

  get nextTicketNumber(): number {
    return this.lastTicketNumber++;
  }

  get lastTickets(): Ticket[] {
    return this.inProgressTickets.slice(0, 13);
  }

  createTicket() {
    const ticket = new Ticket(this.nextTicketNumber);

    this.pendingTickets.push(ticket);

    return ticket;
  }

  assignTicket(agent: string, desk: number) {
    const nextTicket = this.pendingTickets.shift();

    if (!nextTicket) {
      return null;
    }

    nextTicket.agent = agent;
    nextTicket.desk = desk;

    this.inProgressTickets.unshift(nextTicket);

    return nextTicket;
  }
}
