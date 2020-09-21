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
    location: {
      lng: 123,
      lat: 123,
    },
    headline: "Lorem Ipsum",
    body: "Lorem Ipsum",
    timestamp: "Lorem Ipsum",
  },
  {
    id: "2",
    location: {
      lng: 123,
      lat: 123,
    },
    headline: "Lorem Ipsum",
    body: "Lorem Ipsum",
    timestamp: "Lorem Ipsum",
  },
];
