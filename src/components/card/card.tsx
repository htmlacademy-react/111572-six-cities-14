import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute } from '../../const';

type CardProps = {
    id: number;
    title: string;
    price: number;
    src: string;
    premium: boolean;
    typePlace: string;
}

function Card({id,title, price, src, premium, typePlace}: CardProps):JSX.Element {
  const [, setIsActive] = useState(false);

  return (
    <article onMouseEnter={() => setIsActive(true)} onMouseOut={() => setIsActive(false)} className="cities__card place-card">
      {premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={src} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{typePlace}</p>
      </div>
    </article>
  );
}

export default Card;
