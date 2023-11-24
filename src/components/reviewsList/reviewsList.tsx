import Review from '../../components/review/review';
import {REVIEWS} from '../../mocks/reviews';

function ReviewsList():JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{REVIEWS.length}</span></h2>
      <ul className="reviews__list">
        {REVIEWS.map((review)=>(
          <Review key={review.id} id={review.id} name={review.name} raiting={review.raiting} avatarUrl={review.avatarUrl} description={review.description} date={review.date} />
        ))}
      </ul>
    </>
  );
}
export default ReviewsList;
