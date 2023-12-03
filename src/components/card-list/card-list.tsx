import Card from '../card/card';
import { CardOffered, CityPoint } from '../../const';

type CardListProps = {
  offersCardList: CardOffered[];
  onCardHover?: (id: CityPoint | null) => void;
}
function CardList ({offersCardList, onCardHover }: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersCardList.map((offer) => (
        <Card key={offer.id} id={offer.id} src={offer.previewImage} price={offer.price} title={offer.title} premium={offer.isPremium} typePlace={offer.type} onCardHover={onCardHover}/>
      ))};
    </div>
  );
}

export default CardList;
