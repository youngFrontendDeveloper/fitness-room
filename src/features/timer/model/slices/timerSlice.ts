import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialTimerState } from '../types/initialTimerState';

const initialState: InitialTimerState = {
  isTimeFinished: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimeFinished: (state, action: PayloadAction<boolean>) => {
      state.isTimeFinished = action.payload;
    },
  },
});
export const { setTimeFinished } = timerSlice.actions;
export default timerSlice.reducer;
