import { createAction } from '@reduxjs/toolkit';
import { CityName, Sort, NameSpace, CardOffered, CardOfferedReview} from './../const';


export const changeCity = createAction('city/changeCity', (value: CityName) => ({
  payload: value,
}));

export const renderOffers = createAction(`${NameSpace.Offers}/fetchOffers`);
export const fetchOffer = createAction<CardOffered['id']>(`${NameSpace.Offer}/fetchOffer`);
export const fetchReviews = createAction<CardOffered['id']>(`${NameSpace.Reviews}/fetchReviews`);

export const changeSort = createAction('offers/changeSort', (value: Sort) => ({
  payload: value,
}));
