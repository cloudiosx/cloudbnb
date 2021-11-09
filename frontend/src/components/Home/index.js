import React, { useEffect } from "react";
import "./Home.css";
import Banner from "../Banner";
import Card from "../Card";
import { getHomes } from "../../store/homeReducer";
import { getImages } from "../../store/imageReducer";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const homesObj = useSelector((state) => state.home.entries);
  const homes = Object.values(homesObj);

  const imagesObj = useSelector((state) => state.image.entries);
  const images = Object.values(imagesObj);

  useEffect(() => {
    // 5. Dispatch the return value of the thunk creator instead (the thunk)
    // const thunk = getArticles();
    // console.log(thunk);
    dispatch(getHomes());
    dispatch(getImages());
  }, [dispatch]);

  const similarityFinder = () => {
    return homes.map(({ id }) => {
      console.log("id", id);
      return images.map(({ homeId, url }) => {
        console.log("homeId", homeId);
        if (id === homeId) {
          console.log("url", url);
          return url;
        }
      });
    });
  };

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        {console.log("homes", homes)}
        {console.log("images", images)}
        {console.log("similarityFinder", similarityFinder())}
      </div>
      <div className="home__section">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
