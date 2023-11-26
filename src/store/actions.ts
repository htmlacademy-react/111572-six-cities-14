import { createAction } from '@reduxjs/toolkit';
import { CityName, CardOffered } from './../const';

export const changeCity = createAction('city/changeCity', (value: CityName) => ({
  payload: value,
}));

export const renderOffers = createAction('offers/renderOffers', (value: CardOffered[]) => ({
  payload: value,
}));
