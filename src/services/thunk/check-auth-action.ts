import { createAsyncThunk } from '@reduxjs/toolkit';
import { Thunk, TypeUser } from '../../type-data/type';
import { ApiRoute } from '../../const';

const checkAuthAction = createAsyncThunk<TypeUser, undefined, Thunk>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TypeUser>(ApiRoute.Login);

    return data;
  }
);
export { checkAuthAction };
