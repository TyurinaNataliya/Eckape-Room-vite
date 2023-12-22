import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sortingLevelSlice } from './sorting-quests-level-slice';
import { sortingTypeSlice } from './sorting-quests-type-slice';
import { createAPI } from '../../services/api';
import { questsSlice } from './quests-slice';
import { questSlice } from './quest-slice';
import { authStatusSlice } from './auth-status-slice';

const reducer = combineReducers({
  [sortingLevelSlice.name]: sortingLevelSlice.reducer,
  [sortingTypeSlice.name]: sortingTypeSlice.reducer,
  [questsSlice.name]: questsSlice.reducer,
  [questSlice.name]: questSlice.reducer,
  [authStatusSlice.name]: authStatusSlice.reducer,
});

const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export { store, reducer };
