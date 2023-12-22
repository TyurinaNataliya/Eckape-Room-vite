import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { DEFAULT_QUESTS_VARIETY } from '../../const';

type InitialState = {
  type: string;
}

const initialState: InitialState = {
  type: DEFAULT_QUESTS_VARIETY ,
};

const sortingTypeSlice = createSlice({
  name: 'sortingType',
  initialState,
  reducers: {
    changeType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    }
  },
});

export {sortingTypeSlice };
