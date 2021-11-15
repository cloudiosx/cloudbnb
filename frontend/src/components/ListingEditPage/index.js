import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editListing } from "../../store/homeReducer";
import { useParams } from "react-router";

function EditListing() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { listingId } = useParams();
  const homeObj = useSelector((state) => state.home);
  const specificHome = homeObj[listingId];

  const [name, setName] = useState(specificHome.name);
  const [address, setAddress] = useState(specificHome.address);
  const [city, setCity] = useState(specificHome.city);
  const [state, setState] = useState(specificHome.state);
  const [country, setCountry] = useState(specificHome.country);
  const [price, setPrice] = useState(specificHome.price);
  const [description, setDescription] = useState(specificHome.description);
  const [title, setTitle] = useState(specificHome.title);
  const [imageUrl, setImageUrl] = useState(specificHome.imageUrl);
  const sessionUser = useSelector((state) => state.session.user);

  const userId = sessionUser?.id;

  const handleSubmit = (event) => {
    const data = {
      userId,
      name,
      address,
      city,
      state,
      country,
      price,
      description,
      title,
      imageUrl,
    };

    dispatch(editListing(data, listingId));

    history.push(`/listings/${listingId}`);

    event.preventDefault();
  };

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <>
      <div className="edit-form-page ">
        <form onSubmit={handleSubmit}>
          <h1>Edit Listing</h1>
          <div className="field-group">
            <label>Name:</label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>Address:</label>
            <input
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>City:</label>
            <input
              name="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>State:</label>
            <input
              name="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>Country:</label>
            <input
              name="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>Price:</label>
            <input
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>Description:</label>
            <input
              name="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>Title:</label>
            <input
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>Image URL:</label>
            <input
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
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

export default EditListing;
