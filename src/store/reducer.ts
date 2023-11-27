import { createReducer } from '@reduxjs/toolkit';
import { CityName, Sort, State } from '../const';
import { changeCity, renderOffers, changeSort } from './actions';
import { offerSingleData } from './../mocks/offer';

const initialState: State = {
  city: CityName.Paris,
  offers: offerSingleData,
  sort: Sort.Popular,
};
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(renderOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    });
});
