import Review from '../review/review';
import { CardOfferedReview, CardOffered} from '../../const';

type ReviewListPropsType = {
  reviews: CardOfferedReview[];
  id: CardOffered['id'];
}
function ReviewsList({reviews}: ReviewListPropsType):JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review)=>(
          <Review review={review} />
        ))}
      </ul>
    </>
  );
}
export default ReviewsList;
