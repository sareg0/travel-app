import * as React from "react";

export interface BaseMarkerProps {
  type: string; //outlien the specific strings
}

export const BaseMarker: React.FC<BaseMarkerProps> = ({ type }) => {
  return <div className={`timeline-marker is-${type}`}></div>;
};
