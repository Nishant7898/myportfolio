import React from "react";
import Page1 from "./Pages/page1";

import Page2 from "./Pages/page2";
import Page3 from "./Pages/Page3";
import Header from "./Components/header";
 
const App = () => {
  return (
    <>
    <Header/>
      <Page1 />
      <Page2 />
      <Page3 />
    </>
  );
};

export default App;
