import Card from '../card/card';
import { CardOffered } from '../../const';

type CardListProps = {
  offersCardList: CardOffered[];
  onCardHover?: (id: CardOffered['id'] | null) => void;
}
function CardList ({offersCardList, onCardHover }: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersCardList.map((offer) => (
        <Card key={offer.id} id={offer.id} src={offer.images[0]} price={offer.price} title={offer.title} premium={offer.premium} typePlace={offer.typePlace} onCardHover={onCardHover}/>
      ))};
    </div>
  );
}

export default CardList;
