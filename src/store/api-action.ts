import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, NameSpace, CardOffered, CardOfferedReview} from '../const';
//import { OfferPreviewType } from '../types/offer-preview';

type ExtraType = {
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<CardOffered[], undefined, ExtraType>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CardOffered[]>(APIRoute.Offers);

    console.log(data, 'DATA');

    return data;
  }
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
  { reviewData: CardOfferedReview; offerId: CardOffered['id'] },
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
