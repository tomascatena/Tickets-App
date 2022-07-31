import { io } from 'socket.io-client';
import React from 'react';

export const useSocket = (serverPath: string) => {
  const [isOnline, setIsOnline] = React.useState(false);

  const socket = React.useMemo(() => io(serverPath, { transports: ['websocket'] }), [serverPath]);

  React.useEffect(() => {
    setIsOnline(socket.connected);
  }, [socket]);

  React.useEffect(() => {
    socket.on('connect', () => {
      setIsOnline(true);
    });
  }, [socket]);

  React.useEffect(() => {
    socket.on('disconnect', () => {
      setIsOnline(false);
    });
  }, [socket]);

  return { socket, isOnline };
};
