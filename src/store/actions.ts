import { createAction } from '@reduxjs/toolkit';
import { CityName, CardOffered, Sort } from './../const';

export const changeCity = createAction('city/changeCity', (value: CityName) => ({
  payload: value,
}));

export const renderOffers = createAction('offers/renderOffers', (value: CardOffered[]) => ({
  payload: value,
}));

export const changeSort = createAction('offers/changeSort', (value: Sort) => ({
  payload: value,
}));
