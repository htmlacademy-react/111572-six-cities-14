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

export type CardOfferedReview = {
  id: number;
  name: string;
  avatarUrl: string;
  description: string;
  raiting: number;
  date: string;
};

export type CardOffered = {
  id: number;
  city: string;
  images: string[];
  price: number;
  title: string;
  premium: boolean;
  typePlace: string;
  location: {
    title: string;
    lat: number;
    lng: number;
  };
  amountOfBedrooms: number;
  amountOfPeople: number;
  raiting: number;
  inside: string[];
  host: CardOfferedHost;
  onCardHover?: void;
}

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  id: number;
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];
export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 150;
