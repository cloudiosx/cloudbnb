import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SearchPage from "./components/Search";
import ListingsPage from "./components/ListingsPage";
import Footer from "./components/Footer";
import "./components/FontAwesomeIcons";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/listings">
            <ListingsPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      )}

      <Footer />
    </>
  );
}

export default App;
