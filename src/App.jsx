import React from "react";
import PageA from "./Pages/pageA";
import PageB from "./Pages/pageB";
import PageC from "./Pages/pageC";

import Hire from "./Components/hire";

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
