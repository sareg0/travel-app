import * as React from "react";

export interface TimelineHeaderProps {
  text: string;
  size: string | undefined; //change to oneof
}

export const TimelineHeader: React.FC<TimelineHeaderProps> = ({
  text,
  size,
}) => {
  return (
    <header className="timeline-header">
      <span className={`tag ${size === "m" && "is-medium"} is-primary`}>
        {text}
      </span>
    </header>
  );
};
