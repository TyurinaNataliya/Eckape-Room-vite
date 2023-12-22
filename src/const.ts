const AppRoute = {
  Main: '/',
  Login: '/login',
  MyQuest: '/my-quests',
  Quest: '/quest',
  Contacts: '/contacts',
  Booking: '/booking',
  NotFound: '/404',
};

const NameSpace = {
  Quest: '/quest',
  Quests: '/quests',
  Booking: '/booking',
  User: '/user',
  Error: '/error',
};

const LevelsVariety = {
  Any: 'any',
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
};

enum QuestsVarietyEnglishRussia {
  'adventures' = 'Приключения',
  'horror' = 'Ужасы',
  'mystic' = 'Мистика',
  'detective' = 'Детектив',
  'sci-fi' = 'Sci-fi',
}

enum LevelEnglishRussia {
  easy = 'Лёгкий',
  medium = 'Средний',
  hard = 'Сложный',
}

const QuestsVariety = {
  All: 'all-quests',
  Adventures: 'adventure',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  SciFi: 'sci-fi',
};

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const RequestStatus = {
  Idle: 'IDLE',
  Pending: 'PENDING',
  Success: 'SUCCESS',
  Error: 'ERROR',
};

const ApiRoute = {
  Quests: '/quest',
  QuestsBooking: '/buking',
  Login: '/login',
  Logout: '/logout',
};

const NAME_LEVEL_QUESTS = ['Любой', 'Лёгкий', 'Средний', 'Сложный'];

const NAME_LEVEL_QUESTS_ENGLISH = ['any', 'easy', 'medium', 'hard'];

const NAME_TYPE_QUESTS = [
  'Все квесты',
  'Приключения',
  'Ужасы',
  'Мистика',
  'Детектив',
  'Sci-fi',
];
const NAME_TYPE_QUESTS_ENGLISH = [
  'all-quests',
  'adventures',
  'horror',
  'mystic',
  'detective',
  'sci-fi',
];

const LocationEscapeRoom = {
  latitude: 59.968322,
  longitude: 30.317359,
  zoom: 30,
};

const TIME_SELEKTION_TODAY = ['9:45', '15:00', '17:30', '19:30', '21:30'];
const TIME_SELEKTION_TOMORROW = ['11:00', '15:00', '17:30', '19:45', '21:30'];

const URL_MARKER =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
const DEFAULT_QUESTS_VARIETY = 'all-quests';
const DEFAULT_LEVEL_VARIETY = 'any';

export {
  TIME_SELEKTION_TODAY,
  TIME_SELEKTION_TOMORROW,
  AppRoute,
  LevelsVariety,
  QuestsVariety,
  AuthorizationStatus,
  NameSpace,
  RequestStatus,
  DEFAULT_QUESTS_VARIETY,
  DEFAULT_LEVEL_VARIETY,
  NAME_TYPE_QUESTS,
  NAME_TYPE_QUESTS_ENGLISH,
  ApiRoute,
  LevelEnglishRussia,
  QuestsVarietyEnglishRussia,
  LocationEscapeRoom,
  URL_MARKER,
  NAME_LEVEL_QUESTS,
  NAME_LEVEL_QUESTS_ENGLISH,
};
