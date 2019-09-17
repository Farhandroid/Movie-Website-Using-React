import React from "react";
import Header from "./components/elements/Header/Header";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/elements/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/:movieId" component={Movie} exact />
              <Route component={NotFound} />
            </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
