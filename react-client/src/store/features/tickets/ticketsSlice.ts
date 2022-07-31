import { createSlice } from '@reduxjs/toolkit';

export interface TicketsState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TicketsState = {
  value: 0,
  status: 'idle',
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    increment: () => {},
    extraReducers: () => {},
  },
});

export const ticketsActions = ticketsSlice.actions;

export default ticketsSlice.reducer;
