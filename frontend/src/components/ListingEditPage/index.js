import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editListing } from "../../store/homeReducer";
import { useParams } from "react-router";

function EditListing() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { listingId } = useParams();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
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

    history.push("/listings");

    event.preventDefault();
  };

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Edit Listing</h1>
        <label>
          Name:
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          City:
          <input
            name="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          State:
          <input
            name="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label>
          Country:
          <input
            name="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <input
            name="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Title:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}

export default EditListing;
