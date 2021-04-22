import "./App.scss";
import Home from "./screens/Home";
import UserDetails from "./screens/UserDetails";
import Header from "./components/header";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={UserDetails} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
