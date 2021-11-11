import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createListingReview } from "../../store/reviewReducer";

function CreateReview() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [review, setReview] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser?.id;

  const { listingId } = useParams();

  const handleSubmit = (event) => {
    const data = {
      userId,
      homeId: listingId,
      review,
    };

    dispatch(createListingReview(data));

    history.push(`/listings/${listingId}`);

    event.preventDefault();
  };

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Listing</h1>
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

export default CreateReview;
