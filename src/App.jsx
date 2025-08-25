import React from "react";
import PageA from "./Pages/PageA";
import PageB from "./Pages/PageB";
import PageC from "./Pages/pageC";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <PageA />
      <PageB />
      <PageC />
    </>
  );
};

export default App;
