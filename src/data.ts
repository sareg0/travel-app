export interface Location {
  lng: number;
  lat: number;
}
export interface EventData {
  id: string;
  location: Location;
  headline: string;
  body: string;
  timestamp: string;
}
export type EventDataList = EventData[];

export const data: EventDataList = [
  {
    id: "1",
    location: {lat: 39.6012, lng: -9.0701},
    headline: "Lorem Ipsum",
    body: "Lorem Ipsum",
    timestamp: "Lorem Ipsum",
  },
  {
    id: "2",
    location: {lat: 41.5454, lng: -8.4265},
    headline: "Lorem Ipsum",
    body: "Lorem Ipsum",
    timestamp: "Lorem Ipsum",
  },
];
