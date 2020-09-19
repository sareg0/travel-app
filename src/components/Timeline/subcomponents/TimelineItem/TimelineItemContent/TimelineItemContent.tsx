import * as React from "react";

export interface TimelineItemContentProps {
  children: any;
}

export const TimelineItemContent: React.FC<TimelineItemContentProps> = ({
  children,
}) => {
  return <>{children}</>;
};
