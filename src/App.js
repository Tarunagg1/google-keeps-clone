import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <Fragment>
      <DataProvider>
        <Home />
      </DataProvider>
    </Fragment>
  );
}

export default App;
