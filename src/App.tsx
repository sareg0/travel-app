import React, {useState, useEffect} from "react";
import { Timeline } from "./components/Timeline";
import MapContainer from './components/Map';
import * as contentful from 'contentful'

export interface EventData {
  location: contentful.EntryFields.Location;
  title: string;
  body: string;
  timestamp: string;
}
export type ContentfulEventEntry = contentful.Entry<EventData>
export type ContentfulEventEntryCollection = contentful.EntryCollection<EventData>

// export interface Entry<T> {
//   sys: Sys;
//   fields: T;
//   toPlainObject(): object;
//   update(): Promise<Entry<T>>;
// }


const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY ?? "",
  host: "preview.contentful.com"
})


const App: React.FC = () => {
  const [data, setData] = useState<ContentfulEventEntryCollection>()
  useEffect(() => {
    client.getEntries<EventData>()
    .then((response) => setData(response))
    .catch(console.error)
  }, [])
  console.log(data)

  if (data) {
    return (
      <div className="map-timeline-grid">
        <section style={{height: '100vh', padding: '20px'}} >
          <Timeline data={data} />
        </section>
        <section>
          <MapContainer data={data} />
        </section>
      </div>
    )
  }

  return null
};

export default App;
