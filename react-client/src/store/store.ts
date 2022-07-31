import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './features/tickets/ticketsSlice';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable */
