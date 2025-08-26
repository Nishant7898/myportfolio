import React from "react";
import PageA from "./pages/pageA";
import PageB from "./pages/pageB";
import PageC from "./pages/pageC";

import Hire from "./components/hire";

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
