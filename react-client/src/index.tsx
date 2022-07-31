import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from './store/store';
import React from 'react';
import TicketsApp from './TicketsApp';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <TicketsApp />
  </Provider>
);
