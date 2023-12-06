import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { State, CityPoint, cityMapArray, AuthorizationStatus, AppRoute, RequestStatus } from '../../const';
import Error from '../error/error';
import Header from '../../components/header/header';
import FormReview from '../../components/form-review/form-review';
import Spinner from '../../components/spinner/spinner';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NearPlaces from '../../components/near-place/near-place';
import Map from '../../components/map/map';
import markerPoints from '../../components/utils/marker-maps';
import { fetchFavorites, fetchOffer, fetchReviews, fetchNearPlaces, postFavorites} from '../../store/api-action';
import { BookmarkButton } from '../../components/bookmark-button/bookmark-button';

function Offer():JSX.Element {
  const navigate = useNavigate();
  const status = useAppSelector((state: State) => state.authorizationStatus);
  const isLoading = useAppSelector((state: State) => state.offerFetchingStatus);
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const offer = useAppSelector((state: State) => state.offer);
  const review = useAppSelector((state: State) => state.reviews);
  const nearPlaces = useAppSelector((state: State) => state.nearPlaces);
  const authorizationStatus = useAppSelector((state: State) => state.authorizationStatus);
  const reviewArrSlice = review.slice(0, 10);

  const handleToggle = useCallback(() => {
    const isFavorite = Number(!offer?.isFavorite);
    if(authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    } else {
      dispatch(postFavorites({ offerId: id, status: isFavorite}))
        .then(() => {
          dispatch(fetchFavorites());
        });
    }
  },[dispatch, id]);


  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchReviews(id));
    dispatch(fetchNearPlaces(id || ''));
  }, [id, dispatch]);

  if (!offer) {
    if (isLoading === RequestStatus.Pending) {
      return (
        <div className="page">
          <Spinner />
        </div>
      );
    }
    return (
      <Error />
    );
  }


  const nearPoints: CityPoint[] = markerPoints(nearPlaces);

  const mapCenter: cityMapArray = {
    name: offer?.city.name,
    location: offer?.location,
  };

  const mapCenterMarker: CityPoint = {
    id: offer?.id,
    location: offer?.location,
  };


  return (
    <>
      <div className="page">
        <Helmet>6 cities - Login</Helmet>
        <Header />
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer?.images.map((img) => (
                  <div className="offer__image-wrapper" key={img}>
                    <img className="offer__image" src={img} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer?.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">{offer?.title}</h1>
                  <BookmarkButton status={offer.isFavorite} element='offer' onToggle={handleToggle} />
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer?.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">{offer?.type}</li>
                  <li className="offer__feature offer__feature--bedrooms">{offer?.bedrooms} bedrooms</li>
                  <li className="offer__feature offer__feature--adults">{offer?.maxAdults} adults</li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{offer?.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {offer?.goods.map((good) => (
                      <li key={good} className="offer__inside-item">{good}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="offer__user-name">{offer?.host.name}</span>
                    {offer?.host.isPro && (
                      <span className="offer__user-status">isPro</span>
                    )}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">{offer?.description}</p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <ReviewsList id={offer?.id} reviews={reviewArrSlice}/>
                  {status === AuthorizationStatus.Auth ?
                    <FormReview offerId={offer?.id}/>
                    : ''}
                </section>
              </div>
            </div>
            <Map city={mapCenter} points={nearPoints} selectedPoint={mapCenterMarker} page={'offer'} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearPlaces.map((place) => (
                  <NearPlaces key={place?.id} nearPlace={place} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Offer;
