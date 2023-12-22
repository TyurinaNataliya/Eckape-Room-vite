import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { DEFAULT_LEVEL_VARIETY } from '../../const';

type InitialState = {
  level: string;
}

const initialState: InitialState = {
  level: DEFAULT_LEVEL_VARIETY ,
};

const sortingLevelSlice = createSlice({
  name: 'sortingLevel',
  initialState,
  reducers: {
    changeLevel(state, action: PayloadAction<string>) {
      state.level = action.payload;
    }
  },
});

export {sortingLevelSlice};
