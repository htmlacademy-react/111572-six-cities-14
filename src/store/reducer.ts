import { createReducer } from '@reduxjs/toolkit';
import { CityName, Sort, State, RequestStatus} from '../const';
import { changeCity, changeSort } from './actions';
import
{
  fetchOffers,
  fetchOffer,
  fetchReviews,
  postReviews,
}
  from '../store/api-action';

const initialState: State = {
  city: CityName.Paris,
  offers: [],
  sort: Sort.Popular,
  offer: null,
  reviews: [],
  reviewsSendingStatus: RequestStatus.Idle
};
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offersFetchingStatus = RequestStatus.Success;
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.offerFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offerFetchingStatus = RequestStatus.Success;
      state.offer = action.payload;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.offerFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchReviews.pending, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviewsFetchingStatus = RequestStatus.Success;
      state.reviews = action.payload;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Error;
    })
    .addCase(postReviews.pending, (state) => {
      state.reviewsSendingStatus = RequestStatus.Pending;
    })
    .addCase(postReviews.fulfilled, (state, action) => {
      state.reviewsSendingStatus = RequestStatus.Success;
      state.reviews.push(action.payload);
    })
    .addCase(postReviews.rejected, (state) => {
      state.reviewsSendingStatus = RequestStatus.Error;
    })
});
