import { Helmet } from 'react-helmet-async';
import { CardOffered, cities } from '../../const';
import Header from '../../components/header/header';
import CitiesListComponent from '../../components/citiesList/citiesList';
import Map from '../../components/map/map';
import CardList from '../../components/cardList/cardList';

type MainPageProps = {
  offersMainPage: CardOffered[];
}
function MainPage({offersMainPage}: MainPageProps): JSX.Element {
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
              <CardList offersCardList={offersMainPage} />
            </section>
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
