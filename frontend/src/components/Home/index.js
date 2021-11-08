import React, { useEffect } from "react";
import "./Home.css";
import Banner from "../Banner";
import Card from "../Card";
import { getHomes } from "../../store/homeReducer";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const homesObj = useSelector((state) => state.home.entries);
  const homes = Object.values(homesObj);

  useEffect(() => {
    // 5. Dispatch the return value of the thunk creator instead (the thunk)
    // const thunk = getArticles();
    // console.log(thunk);
    dispatch(getHomes());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        {console.log(homes)}
        {homes.map(({ id, description, title, price }) => (
          <Card
            key={id}
            description={description}
            title={title}
            price={price}
          />
        ))}
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
