import {createAsyncThunk} from '@reduxjs/toolkit';

import {ApiRoute} from '../../const';
import { Thunk, TypeQuest } from '../../type-data/type';


const fetchQuestAction = createAsyncThunk<TypeQuest, string, Thunk>(
  'data/fetchQuest',
  async (id, {extra: api}) => {
    const {data} = await api.get<TypeQuest>(`${ApiRoute.Quests}/${id}`);

    return data;
  }
);

export {fetchQuestAction};
