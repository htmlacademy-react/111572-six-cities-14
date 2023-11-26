import { CardOffered, CityName} from './../../const';
import { offerSingleData } from '../../mocks/offer';

export default function sortOffersByName(city: CityName, offers: CardOffered[]): CardOffered[] {

  return offers.filter((offer) => offer.location.title === city);
}
