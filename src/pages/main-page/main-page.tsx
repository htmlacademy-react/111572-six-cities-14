import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { CardOffered, cities, City, Points, Point } from '../../const';
import Header from '../../components/header/header';
import CitiesListComponent from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import CardList from '../../components/card-list/card-list';
import FormSort from '../../components/form-sort/form-sort';

type MainPageProps = {
  offersMainPage: CardOffered[];
  city: City;
  points: Points;
}
function MainPage({offersMainPage, city, points}: MainPageProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const handleListItemHover = (id: number | null) => {
    const currentPoint = points.find((point) => point.id === id);
    setSelectedPoint(currentPoint);
  };
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
                4 places to stay in Amsterdam
              </b>
              <FormSort />
              <CardList offersCardList={offersMainPage} onCardHover={handleListItemHover} />
            </section>
            <Map city={city} points={points} selectedPoint={selectedPoint} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
