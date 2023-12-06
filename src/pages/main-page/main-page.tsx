import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useCallback} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { CardOffered, cities, State,CityPoint } from '../../const';
import Header from '../../components/header/header';
import CitiesListComponent from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import CardList from '../../components/card-list/card-list';
import FormSort from '../../components/form-sort/form-sort';
import sortOffersByName from '../../components/utils/sorted-offers-by-name';
import sortedOffers from '../../components/utils/sort-offers';
import {fetchOffers } from '../../store/api-action';
import {cityMapData} from '../../const';
import markerPoints from '../../components/utils/marker-maps';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [selectedPoint, setSelectedPoint] = useState<CityPoint | null>(
    null
  );
  const activeCity = useAppSelector((state: State) => state.city);
  const offersCard = useSelector((state: State) => state.offers);
  const sortCards = useSelector((state: State) => state.sort);
  const activeCityOffers: CardOffered[] = sortOffersByName(activeCity, offersCard);
  const cityMapNew = cityMapData.find((x) => x.name === activeCity);
  const points: CityPoint[] = markerPoints(activeCityOffers);

  const handleListItemHover = useCallback((point: CityPoint | null) => {
    setSelectedPoint(point);
  }, []);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>6 cities - Main</Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesListComponent citiesList={cities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {activeCityOffers.length} places to stay in {activeCity}
              </b>
              <FormSort />
              <CardList offersCardList={sortedOffers(activeCityOffers, sortCards)} onCardHover={handleListItemHover} />
            </section>
            <Map city={cityMapNew} points={points} selectedPoint={selectedPoint} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
