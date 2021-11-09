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

  // const similarityFinder = () => {
  //   return homes.map(({ id }) => {
  //     console.log("id", id);
  //     return images.map(({ homeId, url }) => {
  //       console.log("homeId", homeId);
  //       if (id === homeId) {
  //         console.log("url", url);
  //         return url;
  //       }
  //     });
  //   });
  // };
  // The problem happens where there are more than 1 card used
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        {console.log("homes", homes)}
        {console.log("images", images)}
        <Card
          src={images[0]?.url}
          title={homes[0]?.title}
          description={homes[0]?.description}
          price={homes[0]?.price}
        />

        <Card
          src={images[1]?.url}
          title={homes[1]?.title}
          description={homes[1]?.description}
          price={homes[1]?.price}
        />

        <Card
          src={images[2]?.url}
          title={homes[2]?.title}
          description={homes[2]?.description}
          price={homes[2]?.price}
        />
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
