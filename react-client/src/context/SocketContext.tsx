import { Socket } from 'socket.io-client';
import { useSocket } from '../hooks/useSocket';
import React from 'react';

interface SocketContextInterface {
  socket: Socket;
  isOnline: boolean;
}

export const SocketContext = React.createContext<SocketContextInterface | null>(null);

type SocketProviderProps = {
  children: React.ReactNode;
};

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { socket, isOnline } = useSocket('http://localhost:8080');

  return (
    <SocketContext.Provider
      value={{
        socket,
        isOnline,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
