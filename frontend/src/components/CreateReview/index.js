import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createListingReview } from "../../store/reviewReducer";

function CreateReview() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser?.id;

  const { listingId } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      userId,
      homeId: listingId,
      review,
    };

    let newReview = await dispatch(createListingReview(data));

    if (newReview) {
      history.push(`/listings/${listingId}`);
    }
  };

  useEffect(() => {
    const validationErrors = [];

    if (review.length < 1) {
      validationErrors.push("Review is required");
    }

    setErrors(validationErrors);
  }, [review]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Listing</h1>
        <label>
          Review:
          <textarea
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </label>
        <ul id="error-list">
          {errors.map((error) => (
            <li id="errors" key={error}>
              {error}
            </li>
          ))}
        </ul>
        <button disabled={errors.length > 0}>Submit</button>
      </form>
    </>
  );
}

export default CreateReview;
