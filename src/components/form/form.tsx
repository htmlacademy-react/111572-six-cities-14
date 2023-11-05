import { useState } from 'react';
import { StarRaiting } from '../../mocks/starRating';
import Star from '../../components/star/star';

function ReviewForm():JSX.Element {
  const[comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  function handleRatingChange(number: number): void {
    setRating(number);
  }
  
  console.log(rating)

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review (rating: {rating})</label>
        <div className="reviews__rating-form form__rating">
          {StarRaiting.map((star)=>(
            <Star key={star.id} id={star.id} number={star.number} title={star.title} handleRatingChange={handleRatingChange}  />
          ))}
        </div>
      <textarea
        onChange={({ target }) => setComment(target.value)}
        value={comment}
        className="reviews__textarea form__textarea" 
        id="review" 
        name="review" 
        placeholder="Tell how was your stay, what you like and what can be improved"
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default ReviewForm;