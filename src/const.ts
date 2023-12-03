import { CardOffered } from './const';
import { createBrowserHistory } from 'history';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  NearPlaces = 'NEAR_PLACES',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  User = 'USER',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/reviews',
  NearPlaces = 'near_places',
}

export const offersNumber: number = 312;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export type StarRaitingList = {
  id: number;
  number: number;
  title: string;
  handleRatingChange: (number: number) => void;
}

export type CardOfferedList = {
  id: number;
  src: string;
  price: number;
  title: string;
  premium: boolean;
  typePlace: string;
}

export type CardOfferedHost = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
  text: string;
};

export type Author = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type CardOfferedReview = {
  id: string;
  user: Author;
  comment: string;
  raiting: number;
  date: string;
};

export type CardOffered = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    }
  }
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  images: string[];
  host: CardOfferedHost;
  onCardHover?: (id: CityPoint | null) => void;
}

export type City = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityPoint={
  id: string;
  location: City;
}

export type Point = {
  id: number;
  title: string;
  lat: number;
  lng: number;
};

export enum CityName {
  Paris = "Paris",
  Cologne = "Cologne",
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}
export const CityMap: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export type cityMapArray = {
    name: CityName;
    location: City;
}

export const cityMapData: cityMapArray[] = [
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.846557,
      longitude:4.351697,
      zoom: 13
    },
  },
  {
    name: CityName.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
];

export enum Sort {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export type State = {
  city: CityName;
  offers: CardOffered[];
  sort: Sort;
  offer: null | CardOffered;
  reviews: CardOfferedReview[];
  reviewsSendingStatus: RequestStatus;
}

export enum RequestStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}


export type Points = Point[];
export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 150;

export const MAX_REVIEWS_COUNT = 10;

export const browserHistory = createBrowserHistory();
