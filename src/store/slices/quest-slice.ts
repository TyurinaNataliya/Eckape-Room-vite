import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchQuestAction } from '../../services/thunk/fetch-quest';
import { TypeQuest } from '../../type-data/type';

type StateQuest = {
  quest: TypeQuest | null;
  error: string | null;
  loading: boolean | null;
};

const initialState: StateQuest = {
  quest: null,
  error: null,
  loading: null,
};

const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        fetchQuestAction.fulfilled,
        (state, action: PayloadAction<TypeQuest>) => {
          state.quest = action.payload;
          state.error = null;
          state.loading = false;
        }
      )
      .addCase(fetchQuestAction.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.loading = false;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.loading = true;
      });
  },
});

export { questSlice };
