import Card from '../../components/card/card';
import { offerSingleData } from '../../mocks/offer';

function CardList (): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offerSingleData.map((offer) => (
        <Card key={offer.id} id={offer.id} src={offer.images[0]} price={offer.price} title={offer.title} premium={offer.premium} typePlace={offer.typePlace}/>
      ))};
    </div>
  );
}

export default CardList;
