import {createAsyncThunk} from '@reduxjs/toolkit';
import { ApiRoute } from '../../const';
import { Thunk, TypeQuest } from '../../type-data/type';

const fetchQuestsAction = createAsyncThunk<TypeQuest[], undefined, Thunk>(
  'data/fetchQuests',
  async (_, { extra: api}) => {
    const {data} = await api.get<TypeQuest[]>(ApiRoute.Quests);

    return data;
  },
);

export{fetchQuestsAction};
