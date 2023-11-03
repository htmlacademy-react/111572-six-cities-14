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
}

export const StarRaiting: StarRaitingList[] = [
  {
    id: 1,
    number: 1,
    title: 'terribly'
  },
  {
    id: 2,
    number: 2,
    title: 'badly'
  },
  {
    id: 3,
    number: 3,
    title: 'not bad'
  },
  {
    id: 4,
    number: 4,
    title: 'good'
  },
  {
    id: 5,
    number: 5,
    title: 'perfect'
  }
];

export type CardOfferedList = {
  id: number;
  src: string;
  price: number;
  title: string;
  premium: boolean;
  typePlace: string;
}

export const offersData: CardOfferedList[] = [
  {
    id: 1,
    src: 'img/apartment-01.jpg',
    price: 140,
    title: 'Beautiful & luxurious studio at great location',
    premium: true,
    typePlace: 'apartment',
  },
  {
    id: 2,
    src: 'img/apartment-02.jpg',
    price: 45,
    title: 'Waterfront with extraordinary view',
    premium: false,
    typePlace: 'hostel',
  },
  {
    id: 3,
    src: 'img/apartment-03.jpg',
    price: 700,
    title: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    premium: true,
    typePlace: 'one bedroom flat',
  },
  {
    id: 4,
    src: 'img/apartment-02.jpg',
    price: 123,
    title: '',
    premium: false,
    typePlace: 'apartment',
  },
  {
    id: 5,
    src: 'img/studio-01.jpg',
    price: 140,
    title: 'Lorem ipsum',
    premium: true,
    typePlace: 'apartment',
  }
];


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

export const offerData: CardOffered[] = [
  {
    id: 1,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    price: 120,
    title: 'Waterfront with extraordinary view',
    premium: true,
    typePlace: 'apatment',
    amountOfBedrooms: 3,
    amountOfPeople: 4,
    raiting: 4.8,
    inside: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. <br/> An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
    },
    review: [
      {
        id: 1,
        name: 'Max',
        avatarUrl: 'img/avatar-max.jpg',
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        raiting: 4,
        date: 'April 2019'
      },
      {
        id: 2,
        name: 'Emma',
        avatarUrl: 'img/emma.jpg',
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        raiting: 5,
        date: 'April 2021'
      },
      {
        id: 3,
        name: 'Kim K.',
        avatarUrl: 'img/kim.jpg',
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        raiting: 3,
        date: 'February 2020'
      }
    ]
  }
];
