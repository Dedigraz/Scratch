import { useState } from "react";

import "./App.css";
import { Banner } from "./components/banner";
import { Categories } from "./components/categories";


function App() {

  return (
    <>
      <Banner />
      <Categories />
    </>
  );
}

export default App;
