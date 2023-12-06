import { createReducer } from '@reduxjs/toolkit';
import { CityName, Sort, State, AuthorizationStatus, RequestStatus } from '../const';
import { changeCity, changeSort } from './actions';
import
{
  fetchOffers,
  fetchOffer,
  fetchReviews,
  fetchNearPlaces,
  postReviews,
  postFavorites,
  fetchFavorites,
  login,
  loginAction,
  logout
}
  from '../store/api-action';

const initialState: State = {
  city: CityName.Paris,
  offers: [],
  sort: Sort.Popular,
  offer: null,
  offerFetchingStatus: RequestStatus.Idle,
  offersFetchingStatus: RequestStatus.Idle,
  reviews: [],
  reviewsSendingStatus: RequestStatus.Idle,
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  nearPlaces: [],
  nearPlacesStatus: RequestStatus.Success,
  nearPlacesError: RequestStatus.Error,
  favorites: [],
  favoritesSendingStatus: RequestStatus.Idle,
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
    .addCase(fetchNearPlaces.pending, (state) => {
      state.nearPlacesStatus = RequestStatus.Success;
    })
    .addCase(fetchNearPlaces.rejected, (state) => {
      state.nearPlacesStatus = RequestStatus.Error;
      state.nearPlacesError = RequestStatus.Success;
    })
    .addCase(fetchNearPlaces.fulfilled, (state, action) => {
      state.nearPlacesStatus = RequestStatus.Error;
      state.nearPlaces = action.payload.slice(0, 3);
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
      state.reviewsSendingStatus = RequestStatus.Pending;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviewsSendingStatus = RequestStatus.Success;
      state.reviews = action.payload;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.reviewsSendingStatus = RequestStatus.Error;
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
    .addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(login.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
    })
    .addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(postFavorites.pending, (state) => {
      state.favoritesSendingStatus = RequestStatus.Pending;
    })
    .addCase(postFavorites.fulfilled, (state, action) => {
      state.favoritesSendingStatus = RequestStatus.Success;
      state.favorites.push(action.payload);
      state.offer = action.payload;
    })
    .addCase(postFavorites.rejected, (state) => {
      state.favoritesSendingStatus = RequestStatus.Error;
    })

    .addCase(fetchFavorites.pending, (state) => {
      state.favoritesSendingStatus = RequestStatus.Pending;
    })
    .addCase(fetchFavorites.fulfilled, (state, action) => {
      const favorites = action.payload.map((i:any) => i.id);
      const favoriteId = favorites.map((i:string) => i);
      state.favoritesSendingStatus = RequestStatus.Success;
      if (action.payload) {
        state.favorites = action.payload;
      } else {
        for(let i = 0 ; i <= favoriteId; i++){
          state.favorites = state.favorites.filter((favorite) => favorite.id !== favoriteId[i]);
        }
      }
    })
    .addCase(fetchFavorites.rejected, (state) => {
      state.favoritesSendingStatus = RequestStatus.Error;
    });
});
