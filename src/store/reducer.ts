import { offerSingleData } from './../mocks/offer';
import { createReducer } from '@reduxjs/toolkit';
import { CityName, State } from '../const';
import { changeCity, renderOffers } from './actions';

const initialState: State = {
  city: CityName.Paris,
  offers: offerSingleData,
};
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(renderOffers, (state, action) => {
      state.offers = action.payload;
    });
});
