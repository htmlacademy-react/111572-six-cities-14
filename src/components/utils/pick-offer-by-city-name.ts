import { CardOffered, cityMapArray } from './../../const';

export default function pickOffersByCityName(city: cityMapArray['name'], offers: CardOffered[]): CardOffered[] {

  return offers.filter((offer) => offer.city.name === city);
}
