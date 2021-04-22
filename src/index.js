import React from "react";
import "./main.scss";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import UserProvider from "./context/userContext";

ReactDOM.render(
  <React.Fragment>
    <UserProvider>
      <App />
    </UserProvider>
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
