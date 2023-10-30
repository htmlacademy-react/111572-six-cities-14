import Card from '../../components/card/card';
import { offersData } from '../../const';

function CardList (): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((offer) => (
        <Card key={offer.id} src={offer.src} price={offer.price} title={offer.title} premium={offer.premium} typePlace={offer.typePlace}/>
      ))};
    </div>
  );
}

export default CardList;
