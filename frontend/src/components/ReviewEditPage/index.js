import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editListingReview } from "../../store/reviewReducer";
import "./ReviewEditPage.css";

function EditReview() {
  const { listingId, reviewId } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();

  const reviewObj = useSelector((state) => state.review);
  const specificReview = reviewObj[reviewId];

  const [review, setReview] = useState(specificReview?.review);
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser?.id;

  const handleSubmit = (event) => {
    const data = {
      userId,
      homeId: +listingId,
      review,
    };

    dispatch(editListingReview(data, +reviewId));

    history.push(`/listings/${listingId}`);

    event.preventDefault();
  };

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <>
      <div className="edit-form-page">
        <form onSubmit={handleSubmit}>
          <h1>Edit Review</h1>
          <div className="field-group">
            <label> Review:</label>
            <input
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <div className="single-button">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditReview;
