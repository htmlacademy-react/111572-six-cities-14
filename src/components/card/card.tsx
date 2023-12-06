import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { fetchFavorites, postFavorites} from '../../store/api-action';
import { AppRoute, CardOffered, CityPoint, State, AuthorizationStatus} from '../../const';
import { BookmarkButton } from '../../components/bookmark-button/bookmark-button';


type CardProps = {
    card: CardOffered;
    onCardHover?: (id: CityPoint | null) => void;
}

function Card({card, onCardHover}: CardProps):JSX.Element {
  const authorizationStatus = useAppSelector((state: State) => state.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleMouseEnter = () => {
    onCardHover?.({
      id: card.id,
      location: card.location
    });
  };

  const handleMouseLeave = () => {
    onCardHover?.(null);
  };

  const handleToggle = useCallback(() => {
    const isFavorite = Number(!card?.isFavorite);
    if(authorizationStatus !== AuthorizationStatus.Auth){
      navigate(AppRoute.Login);
    } else {
      dispatch(postFavorites({ offerId: card?.id, status: isFavorite}))
        .then(() => {
          dispatch(fetchFavorites());
        });
    }
  },[dispatch, card?.id, card?.isFavorite, navigate, authorizationStatus]);

  return (
    <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cities__card place-card">
      {card?.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={card?.previewImage} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card?.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton status={card.isFavorite} onToggle={handleToggle} element='place-card'/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${card?.id}`}>{card?.title}</Link>
        </h2>
        <p className="place-card__type">{card?.type}</p>
      </div>
    </article>
  );
}

export default Card;
