import { useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { State, AppRoute, cityMapArray } from '../../const';
import { fetchFavorites } from '../../store/api-action';
import pickOffersByCityName from '../../components/utils/pick-offer-by-city-name';
import Spinner from '../../components/spinner/spinner';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { changeCity } from '../../store/actions';

function Favorites(): JSX.Element{
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const favorite = useAppSelector((state: State) => state.favorites);
  const isLoading = useAppSelector((state: State) => state.favoritesSendingStatus);
  const hasError = useAppSelector((state: State) => state.favoritesSendingStatus);
  const favoriteCities = Array.from(new Set(favorite.map((city) => city.city.name)));

  const handleClick = useCallback((city: cityMapArray['name']) => {
    dispatch(changeCity(city));
  }, [dispatch]);

  return (
    <div className={`${favorite.length === 0 ? 'page--favorites-empty' : 'page'}`}>
      <Header />
      <Helmet>
        <title>6 Cities: Your Favorites</title>
      </Helmet>
      <main className={`page__main page__main--favorites ${favorite.length === 0 ? 'page__main--favorites-empty' : ''}`}>
        {!isLoading ?
          <div className="page__favorites-container container">
            <Spinner />
          </div>
          :
          <div className="page__favorites-container container">
            {favorite.length !== 0 ?
              <section className="favorites">
                {!hasError ?
                  <h1 className="favorites__title">Saved listing not found, please refresh</h1>
                  :
                  <>
                    <h1 className="favorites__title">Saved listing</h1>
                    <ul className="favorites__list">
                      {favoriteCities.map((city) => (
                        <li className="favorites__locations-items" key={city}>
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <Link className="locations__item-link" onClick={() => handleClick(city)} to={AppRoute.Root}>
                                <span>{city}</span>
                              </Link>
                            </div>
                          </div>
                          <div className="favorites__places">
                            <CardList offersCardList={pickOffersByCityName(city, favorite)} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>}
              </section> :
              <FavoritesEmpty />}
          </div>}
      </main>
    </div>
  );
}

export default Favorites;
