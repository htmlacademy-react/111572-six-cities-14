import { CardOffered, CityPoint } from './../../const';

export default function markerPoints(offers: CardOffered[]): CityPoint[] {
  const markers: CityPoint[] = [];

  offers.forEach((offer) => markers.push({
    id: offer.id,
    location: offer.location,
  }));

  return markers;
}
