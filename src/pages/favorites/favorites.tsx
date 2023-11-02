import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { offersData } from '../../const';
import Card from '../../components/card/card';


function Favorites(): JSX.Element{
  return (
    <div className="page">
      <Helmet>6 cities - Favorites</Helmet>
      <Header />
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link to="#" className="locations__item-link">
                  <span>Amsterdam</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offersData.map((offer) => (
                <Card key={offer.id} src={offer.src} price={offer.price} title={offer.title} premium={offer.premium} typePlace={offer.typePlace}/>
              ))};
            </div>
          </li>
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link to="#" className="locations__item-link">
                  <span>Cologne</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offersData.map((offer) => (
                <Card key={offer.id} src={offer.src} price={offer.price} title={offer.title} premium={offer.premium} typePlace={offer.typePlace}/>
              ))};
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Favorites;
