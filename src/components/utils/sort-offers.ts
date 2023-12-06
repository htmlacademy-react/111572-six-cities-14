import { CardOffered, Sort } from '../../const';

export default function sortedOffers(offers: CardOffered[], sorting: Sort): CardOffered[] {
  if(sorting === Sort.TopRated) {
    return offers.sort((best, worst) => worst.raiting - best.raiting);
  } else if(sorting === Sort.HighToLow) {
    return offers.sort((high, low) => low.price - high.price);
  } else if (sorting === Sort.LowToHigh) {
    return offers.sort((high, low) => high.price - low.price);
  } else {
    return offers;
  }
}
