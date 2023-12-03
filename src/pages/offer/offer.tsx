import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../const';
import Header from '../../components/header/header';
import FormReview from '../../components/form-review/form-review';
//import CardList from '../../components/card-list/card-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
//import Map from '../../components/map/map';
import { fetchOffer, fetchReviews } from  '../../store/api-action';

function Offer():JSX.Element {
  const dispatch = useDispatch();
  const paramsId = useParams();
  const offer = useSelector((state: State) => state.offer);
  const review = useSelector((state: State) => state.reviews);
  //const currentPoint = POINTS.find((point) => point.id === Number(paramsId.id));
  //const nearPalces = 
  useEffect(() => {
    dispatch(fetchOffer(paramsId.id));
    dispatch(fetchReviews(paramsId.id));
  }, [paramsId.id, dispatch]);

  console.log(review,  123)

  return (
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
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer?.title}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
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
          </div>
        </section>
        <section className="offer__reviews reviews">
          <ReviewsList id={offer?.id} reviews={review}/>
          <FormReview id={offer?.id}/>
        </section>
      </main>
    </div>
  );
}

export default Offer;
