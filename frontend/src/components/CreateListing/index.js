import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createListing } from "../../store/homeReducer";
import isURL from "validator/es/lib/isURL";

function CreateListing({ onClose }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  const userId = sessionUser?.id;

  const validateForm = () => {
    const validationErrors = [];

    if (!name) validationErrors.push("Name is required");
    if (!address) validationErrors.push("Address is required");
    if (!city) validationErrors.push("City is required");
    if (!state) validationErrors.push("State is required");
    if (!country) validationErrors.push("Country is required");
    if (!description) validationErrors.push("Description is required");
    if (!title) validationErrors.push("Title is required");

    if (!price) {
      validationErrors.push("Price is required");
    } else if (isNaN(price)) {
      validationErrors.push("Price must be a number");
    }

    if (!imageUrl) {
      validationErrors.push("Main image is required");
    } else if (!isURL(imageUrl)) {
      validationErrors.push("Main image url is invalid");
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

    let newHome = await dispatch(createListing(data));

    if (newHome) {
      history.push("/listings");
    }
  };

  // useEffect(() => {

  // }, [
  //   name,
  //   address,
  //   city,
  //   state,
  //   country,
  //   description,
  //   title,
  //   price,
  //   imageUrl,
  // ]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Listing</h1>
        <div class="field-group">
          <label>Name:</label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="field-group">
          <label>Address:</label>
          <input
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div class="field-group">
          <label>City:</label>
          <input
            name="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div class="field-group">
          <label>State:</label>
          <input
            name="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div class="field-group">
          <label>Country:</label>
          <input
            name="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div class="field-group">
          <label>Price:</label>
          <input
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div class="field-group">
          <label>Description:</label>
          <input
            name="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div class="field-group">
          <label>Title:</label>
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div class="field-group">
          <label>Image URL:</label>
          <input
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <ul className="error-list">
          {errors.map((error) => (
            <li className="errors" key={error}>
              {error}
            </li>
          ))}
        </ul>
        <div class="single-button">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default CreateListing;
