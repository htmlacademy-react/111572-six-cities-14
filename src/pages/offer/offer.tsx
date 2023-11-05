import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Review from '../../components/review/review';
import FormReview from '../../components/form/form';
import CardList from '../../components/cardList/cardList';
import { offerSingleData } from '../../mocks/offer';

function Offer():JSX.Element {

  const paramsId = useParams();
  const offerFilterArray = offerSingleData.filter((i) =>
    i.id == paramsId.id
  );
  return (
    <div className="page">
      <Helmet>6 cities - Login</Helmet>
      <Header />
      {offerFilterArray.map((item) => (
        <main key={item.id} className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {item.images.map((img) => (
                  <div className="offer__image-wrapper" key={img}>
                    <img className="offer__image" src={img} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {item.premium &&
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">{item.title}</h1>
                </div>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{item.raiting}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {item.typePlace}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {item.amountOfBedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {item.amountOfPeople} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{item.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {item.inside.map((i)=>(
                      <li key={i} className="offer__inside-item">{i}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src={item.host.avatarUrl} style={{width: '100%', height:'100%', objectFit:'contain'}} alt="Host avatar" />
                    </div>
                    <span className="offer__user-name">
                      {item.host.name}
                    </span>
                    {item.host.isPro &&
                      <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {item.host.text}
                    </p>
                  </div>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{item.review.length}</span></h2>
                <ul className="reviews__list">
                  {item.review.map((p)=>(
                    <Review key={p.id} id={p.id} name={p.name} raiting={p.raiting} avatarUrl={p.avatarUrl} description={p.description} date={p.date} />
                  ))}
                </ul>
                <FormReview />
              </section>
            </div>
            <section className="offer__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <CardList />
              </div>
            </section>
          </div>
        </main>
      ))}
    </div>
  );
}

export default Offer;
