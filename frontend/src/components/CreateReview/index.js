import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createListingReview } from "../../store/reviewReducer";
import "./CreateReview.css";

function CreateReview({ onClose }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser?.id;

  const { listingId } = useParams();

  const validateForm = () => {
    const validationErrors = [];

    if (review.length < 1) {
      validationErrors.push("A review is required");
    }

    setErrors(validationErrors);

    return validationErrors.length;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    onClose();

    if (validateForm() > 0) return;

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

  // useEffect(() => {}, [review]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Review</h1>
        <div className="field-group">
          <label>Review:</label>
          <textarea
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            // required
          ></textarea>
        </div>

        <ul id="error-list">
          {errors.map((error) => (
            <li id="errors" key={error}>
              {error}
            </li>
          ))}
        </ul>
        <div className="single-button">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default CreateReview;
