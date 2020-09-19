import * as React from "react";

export interface IconMarkerProps {
  iconType: string;
}

export const IconMarker: React.FC<IconMarkerProps> = ({ iconType }) => {
  return (
    <div className={`timeline-marker is-danger is-icon`}>
      <i className="fa fa-flag"></i>
    </div>
  );
};
