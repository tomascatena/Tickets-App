import express, { Express } from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import cors from 'cors';
import { Sockets } from './Sockets';

export type ServerConfig = {
  port: number | string;
};

export class Server {
  port: number | string;
  app: Express;
  server: http.Server;
  io: SocketIO.Server;
  sockets: Sockets;

  constructor(serverConfig: ServerConfig) {
    this.port = serverConfig.port;
    this.app = express();

    // http server
    this.server = http.createServer(this.app);

    // socket.io server
    this.io = new SocketIO.Server(this.server, {
      cors: {
        origin: '*',
        methods: 'GET,POST,PUT,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization, X-Requested-With, X-Socket-ID',
      },
    });

    // Initialize sockets
    this.sockets = new Sockets({ io: this.io });
  }

  middlewares() {
    this.app.use(express.static('public'));
    this.app.use(cors());

    this.app.get('/last-tickets', (req, res) => {
      res.json({
        lastTickets: this.sockets.ticketList.lastAssignedTickets,
      });
    });
  }

  configureSockets() {
    this.sockets.socketsEvents();
  }

  start() {
    // Initialize middlewares
    this.middlewares();

    // Start listening for connections
    this.server.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
