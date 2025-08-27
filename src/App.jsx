import React from "react";
import PageA from "./Pages/PageA.jsx";
import PageB from "./Pages/PageB.jsx";
import PageC from "./Pages/pageC.jsx";

import Hire from "./Components/Hire";
import PageD from "./Pages/PageD.jsx";

const App = () => {
  return (
    <> 
      <Hire />
      <PageA />
      <PageB />
      <PageC />
      <PageD/>
    </>
  );
};

export default App;
