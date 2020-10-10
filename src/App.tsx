import React, {useState, useEffect} from "react";
import { Timeline } from "./components/Timeline";
import MapContainer from './components/Map';
import * as contentful from 'contentful'
import { Document } from '@contentful/rich-text-types';

export interface EventData {
  location: contentful.EntryFields.Location;
  title: string;
  body: Document;
  timestamp: string;
  media: contentful.Asset[];
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
  host: process.env.REACT_APP_CONTENTFUL_HOST_NAME
})


const App: React.FC = () => {
  const [data, setData] = useState<ContentfulEventEntryCollection>()
  const [selectedEventId, setSelectedEventId] = useState<string>()

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
          <Timeline data={data} selectedEventId={selectedEventId} onClick={setSelectedEventId} />
        </section>
        <section>
          <MapContainer onClick={setSelectedEventId} data={data} selectedEventId={selectedEventId} />
        </section>
      </div>
    )
  }

  return null
};

export default App;
