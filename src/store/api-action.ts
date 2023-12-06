import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {saveToken, dropToken} from '../services/token';
import { APIRoute, NameSpace, CardOffered, CardOfferedReview, UserAuth, Login} from '../const';
//import { OfferPreviewType } from '../types/offer-preview';

type ExtraType = {
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<CardOffered[], undefined, ExtraType>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CardOffered[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchNearPlaces = createAsyncThunk<CardOffered[], string, {extra: AxiosInstance}>
(
  'offers/fetchNearPlaces',
  async (id, {extra: api}) => {
    const {data} = await api.get<CardOffered[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const fetchOffer = createAsyncThunk<CardOffered, CardOffered['id'], ExtraType>(
  `${NameSpace.Offer}/fetchOffer`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CardOffered>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<CardOfferedReview[], CardOffered['id'], ExtraType>(
  `${NameSpace.Reviews}/fetchOffer`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CardOfferedReview[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

export const postReviews = createAsyncThunk<
CardOfferedReview,
  { reviewData: Pick<CardOfferedReview, 'comment' & 'rating'> ;offerId: CardOffered['id'] },
  ExtraType
>(
  `${NameSpace.Reviews}/postReview`,
  async ({reviewData, offerId}, {extra: api}) => {
    const {data} = await api.post<CardOfferedReview>(`${APIRoute.Reviews}/${offerId}`,
      reviewData
    );
    return data;
  }
);

export const login = createAsyncThunk<UserAuth, undefined, ExtraType>
(
  'auth/login',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserAuth>(`${APIRoute.Login}`);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserAuth, Login, {extra: AxiosInstance}>
(
  'auth/loginAction',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserAuth>(`${APIRoute.Login}`, {email, password});
    saveToken(data.token);
    return {
      name: data.name,
      avatarUrl: data.avatarUrl,
      isPro: data.isPro,
      email: data.email,
      token: data.token,
    };
  },
);

export const logout = createAsyncThunk<void, undefined, {extra: AxiosInstance}>
(
  'auth/logout',
  async (_arg, {extra: api}) => {
    await api.delete(`${APIRoute.Logout}`);
    dropToken();
  },
);

export const postFavorites = createAsyncThunk<CardOffered, {offerId: CardOffered['id']; status: number}, ExtraType>
(`${NameSpace.Favorites}/postFavorites`,
  async({offerId, status},{ extra: api }) => {
    const { data } = await api.post<CardOffered>(`${NameSpace.Favorites}/${offerId}/${status}`);
    return data;
  }
);

export const fetchFavorites = createAsyncThunk<CardOffered[], undefined, {extra: AxiosInstance}>
(
  'favorites/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CardOffered[]>(`${NameSpace.Favorites}`);
    return data;
  },
);
