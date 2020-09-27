import React from "react";
import { Timeline } from "./components/Timeline";
import MapContainer from './components/Map';

import { data } from "./data";
const App: React.FC = () => {
  return (
    <div className="map-timeline-grid">
      <section style={{height: '100vh', padding: '20px'}} >
        <Timeline events={data} />
      </section>
      <section>
        <MapContainer />
      </section>

    </div>
  )
};

export default App;
