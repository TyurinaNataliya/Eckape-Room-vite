import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../hooks/store';

export type TypeQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: 'hard' | 'easy' | 'medium';
  type: 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';
  peopleMinMax: number[]; //[min;max]
  description: string;
  coverImg: string;
  coverImgWebp: string;
  location: {
    address: string;
    coords: [number[]];
  };
};
export type TypeQuestBooking = {
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  slots: {
    today: [
      {
        time: string;
        isAvailable: boolean;
      }
    ];
    tomorrow: [
      {
        time: string;
        isAvailable: boolean;
      }
    ];
  };
};

export type Location = {
  address: string;
  coords: number[]; // [59.968322, 30.317359];
};

export type TypeLocationRoom = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Today = {
  time: string;
  isAvailable: boolean;
};

export type Tomorrow = {
  time: string;
  isAvailable: boolean;
};

export type Slots = {
  today: [Today];
  tomorrow: [Tomorrow];
};

export type TypeBookingQuest = { id: string; location: Location; slots: Slots };

export type TypeUserBooking = {
  date: string; //today┃tomorrow
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: TypeQuest;
};

export type TypeUser = {
  email: string;
  password: string;
  token?: string;
};

export type UserDataLogin = {
  id: number;
  email: string;
  token: string;
};
export type AuthData = {
  login: string;
  password: string;
};

export type Thunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
