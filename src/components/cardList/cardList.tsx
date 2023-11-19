import Card from '../../components/card/card';
import { CardOffered } from '../../const';
import { offerSingleData } from '../../mocks/offer';

type CardListProps = {
  offersCardList: CardOffered[];
  onCardHover?: (id: CardOffered['id'] | null) => void;
}
function CardList ({offersCardList, onCardHover }: CardListProps): JSX.Element {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offerSingleData.length} places to stay in Amsterdam
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
        {offersCardList.map((offer) => (
          <Card key={offer.id} id={offer.id} src={offer.images[0]} price={offer.price} title={offer.title} premium={offer.premium} typePlace={offer.typePlace} onCardHover={onCardHover}/>
        ))};
      </div>
    </>
  );
}

export default CardList;
