import { useState } from 'react';
import { starRaiting } from '../../mocks/starRating';
import Star from '../star/star';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';

function ReviewForm():JSX.Element {
  const[comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  function handleRatingChange(number: number): void {
    setRating(number);
  }

  const isValid:boolean =
  comment.length >= MIN_COMMENT_LENGTH &&
  comment.length <= MAX_COMMENT_LENGTH &&
  rating !== 0;

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review (rating: {rating})</label>
      <div className="reviews__rating-form form__rating">
        {starRaiting.map((star)=>(
          <Star key={star.id} id={star.id} number={star.number} title={star.title} handleRatingChange={handleRatingChange} />
        ))}
      </div>
      <textarea
        onChange={({ target }) => setComment(target.value)}
        value={comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" disabled={!isValid} type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
