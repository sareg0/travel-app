import * as React from "react";

export interface TimelineItemHeaderProps {
  headerText: string;
}

export const TimelineItemHeader: React.FC<TimelineItemHeaderProps> = ({
  headerText,
}) => {
  return <p className="heading">{headerText}</p>;
};
