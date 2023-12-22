import { createSlice } from '@reduxjs/toolkit';
import { TypeQuest } from '../../type-data/type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchQuestsAction } from '../../services/thunk/fetch-quests';

type StateQuests = {
  quests: TypeQuest[] | null;
  changeLevel: TypeQuest[];
  changeType: TypeQuest[];
  loadingStatus: boolean | null;
  typeQuestsSorting: TypeQuest[];
  levelQuestsSorting: TypeQuest[];
  error: null | string;
};

const initialState: StateQuests = {
  quests: null,
  changeLevel: [],
  changeType: [],
  loadingStatus: null,
  typeQuestsSorting: [],
  levelQuestsSorting: [],
  error: null,
};

const questsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    changeType(state, action: PayloadAction<TypeQuest[]>) {
      state.changeType = action.payload;
    },
    changeLevel(state, action: PayloadAction<TypeQuest[]>) {
      state.changeLevel = action.payload;
    },
    addTypeQuestsSorting(state, action: PayloadAction<TypeQuest[]>) {
      state.typeQuestsSorting = action.payload;
    },
    addLevelQuestsSorting(state, action: PayloadAction<TypeQuest[]>) {
      state.levelQuestsSorting = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.loadingStatus = false;
        state.error = null;
      })
      .addCase(fetchQuestsAction.pending, (state) => {
        state.loadingStatus = true;
        state.error = null;
      })
      .addCase(fetchQuestsAction.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.loadingStatus = false;
      });
  },
});

export { questsSlice };
