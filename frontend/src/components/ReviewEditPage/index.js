import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editListingReview } from "../../store/reviewReducer";

function EditReview() {
  const { listingId, reviewId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const reviewObj = useSelector((state) => state.review);
  const specificReview = reviewObj[listingId];

  const [review, setReview] = useState(specificReview.review);
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser?.id;

  const handleSubmit = (event) => {
    const data = {
      userId,
      homeId: +listingId,
      review,
    };

    dispatch(editListingReview(data, reviewId));

    history.push(`/listings/${listingId}`);

    event.preventDefault();
  };

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Edit Review</h1>
        <label>
          Review:
          <input
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default EditReview;
