import React, { useEffect } from "react";
import "./Home.css";
import Banner from "../Banner";
import Card from "../Card";
import { getHomes } from "../../store/homeReducer";
import { getImages } from "../../store/imageReducer";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const homesObj = useSelector((state) => state.home);
  const homes = Object.values(homesObj);

  const imagesObj = useSelector((state) => state.image);
  const images = Object.values(imagesObj);

  useEffect(() => {
    dispatch(getHomes());
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          className="card"
          src={
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636470911/matese-fields-pvHma684eEI-unsplash_q38bl7.jpg"
          }
          title={"Not sure where to go? Perfect."}
        />
        <Card
          className="card"
          src={
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636470913/benjamin-davies-mqN-EV9rNlY-unsplash_rnt5jr.jpg"
          }
          title={"Things to do on your trip"}
        />
        <Card
          className="card"
          src={
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636470905/mathilde-langevin-pGZQ5f-46ic-unsplash_fjjeve.jpg"
          }
          title={"Things to do from home"}
        />
        <Card
          className="card"
          src={
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636472151/ryan-mac-kCABKZBt4Gk-unsplash_hxrgdz.jpg"
          }
          title={"Get inspiration for your next trip"}
        />
      </div>
      <div className="home__section">
        <Card
          className="card"
          src={homes[0]?.imageUrl}
          title={homes[0]?.title}
          description={homes[0]?.name}
          price={`$${homes[0]?.price}/ night`}
        />

        <Card
          className="card"
          src={homes[1]?.imageUrl}
          title={homes[1]?.title}
          description={homes[1]?.name}
          price={`$${homes[1]?.price}/ night`}
        />

        <Card
          className="card"
          src={homes[5]?.imageUrl}
          title={homes[5]?.title}
          description={homes[5]?.name}
          price={`$${homes[5]?.price}/ night`}
        />
        <Card
          className="card"
          src={homes[3]?.imageUrl}
          title={homes[3]?.title}
          description={homes[3]?.name}
          price={`$${homes[3]?.price}/ night`}
        />
      </div>
    </div>
  );
}

export default Home;
