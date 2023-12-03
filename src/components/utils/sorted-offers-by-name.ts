import { CardOffered, CityName} from './../../const';

export default function sortOffersByName(city: CityName, offers: CardOffered[]): CardOffered[] {

  return offers.filter((offer) => offer.city.name === city as string);
}
