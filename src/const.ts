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
  amountOfBedrooms: number;
  amountOfPeople: number;
  raiting: number;
  inside: string[];
  host: CardOfferedHost;
  review: CardOfferedReview[];
}
