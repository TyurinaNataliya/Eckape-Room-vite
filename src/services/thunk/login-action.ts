import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, Thunk, UserDataLogin } from '../../type-data/type';
import { ApiRoute } from '../../const';
import { saveToken } from '../token';

const loginAction = createAsyncThunk<UserDataLogin, AuthData, Thunk>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const {
      data: { token },
      data,
    } = await api.post<UserDataLogin>(ApiRoute.Login, { email, password });
    saveToken(token);
    return data;
  }
);

export { loginAction };
