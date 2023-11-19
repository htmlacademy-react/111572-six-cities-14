import Review from '../../components/review/review';
import {REVIEWS} from '../../mocks/reviews';

function ReviewsList():JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{REVIEWS.length}</span></h2>
      <ul className="reviews__list">
        {REVIEWS.map((p)=>(
          <Review key={p.id} id={p.id} name={p.name} raiting={p.raiting} avatarUrl={p.avatarUrl} description={p.description} date={p.date} />
        ))}
      </ul>
    </>
  );
}
export default ReviewsList;
