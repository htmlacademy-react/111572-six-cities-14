import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { postReviews } from '../../store/api-action';
//import Star from '../star/star';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, RequestStatus, CardOffered, State} from '../../const';
import { fetchReviews } from '../../store/actions';

type ReviewsTypeProps = {
  offerId: CardOffered['id'];
}

function ReviewForm({offerId}: ReviewsTypeProps):JSX.Element {
  const dispatch = useAppDispatch();
  const sendingStatus = useAppSelector((state: State) => state.reviewsSendingStatus);
  const[comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number | string>('');


  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const isValid:boolean =
  comment.length >= MIN_COMMENT_LENGTH &&
  comment.length <= MAX_COMMENT_LENGTH &&
  rating !== 0;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      postReviews({
        offerId,
        reviewData: {
          comment,
          rating: +rating
        },
      })
    );
  };

  useEffect(() => {
    if(sendingStatus === RequestStatus.Success) {
      setComment('');
      setRating('');
      dispatch(fetchReviews(offerId));
    }
  }, [offerId, sendingStatus, dispatch]);

  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review (rating: {rating})</label>
      <div className="reviews__rating-form form__rating">
        {['5', '4', '3', '2', '1'].map((value) => (
          <React.Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleRatingChange}
              checked={rating === value}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="rating title">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        onChange={handleCommentChange}
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
