import Card from '../../components/card/card';
import { useParams } from 'react-router-dom';
import { offerSingleData } from '../../mocks/offer';


function CardList (): JSX.Element {
  const params = useParams();
  const offersFilterArray = offerSingleData.filter((i) =>
    i.city === params.city
  );

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offersFilterArray.length} places to stay in {params.city}
      </b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {offersFilterArray.map((offer) => (
          <Card key={offer.id} id={offer.id} src={offer.images[0]} price={offer.price} title={offer.title} premium={offer.premium} typePlace={offer.typePlace}/>
        ))};
      </div>
    </>
  );
}

export default CardList;
