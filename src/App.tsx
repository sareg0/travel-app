import React from "react";
import { Timeline } from "./components/Timeline";
import { data } from "./data";
const App: React.FC = () => {
  return <Timeline events={data} />;
};

export default App;
