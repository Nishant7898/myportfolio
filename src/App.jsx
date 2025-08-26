import React from "react";
import PageA from "./Pages/PageA.jsx";
import PageB from "./Pages/PageB.jsx";
import PageC from "./Pages/pageC.jsx";

import Hire from "./Components/Hire";

const App = () => {
  return (
    <> 
      <Hire />
      <PageA />
      <PageB />
      <PageC />
    </>
  );
};

export default App;
