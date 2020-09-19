import * as React from "react";

export interface ImageMarkerProps {
  imageUrl: string;
  type: string; //outlien the specific strings
}

export const ImageMarker: React.FC<ImageMarkerProps> = ({ imageUrl, type }) => {
  return (
    <div className={`timeline-marker is-image is-32x32 is-warning`}>
      {/* <img src="https://bulma.io/images/placeholders/32x32.png" alt="" /> */}
      <img src={imageUrl} alt="" />
    </div>
  );
};
