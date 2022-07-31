import { v4 as uuid } from 'uuid';

export class Ticket {
  id: string;
  ticketNumber: number;
  desk: number | null;
  agent: string | null;

  constructor(ticketNumber: number) {
    this.id = uuid();
    this.ticketNumber = ticketNumber;
    this.desk = null;
    this.agent = null;
  }
}
