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
          src={
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636470911/matese-fields-pvHma684eEI-unsplash_q38bl7.jpg"
          }
          title={"Not sure where to go? Perfect."}
        />
        <Card
          src={
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636470913/benjamin-davies-mqN-EV9rNlY-unsplash_rnt5jr.jpg"
          }
          title={"Things to do on your trip"}
        />
        <Card
          src={
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636470905/mathilde-langevin-pGZQ5f-46ic-unsplash_fjjeve.jpg"
          }
          title={"Things to do from home"}
        />
        <Card
          src={
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636470905/mathilde-langevin-pGZQ5f-46ic-unsplash_fjjeve.jpg"
          }
          title={"Things to do from home"}
        />
      </div>
      <div className="home__section">
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
        <Card
          src={images[2]?.url}
          title={homes[2]?.title}
          description={homes[2]?.description}
          price={homes[2]?.price}
        />
      </div>
    </div>
  );
}

export default Home;
