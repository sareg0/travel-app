import * as React from "react";
import { TimelineItemHeader } from "./TimelineItemHeader/TimelineItemHeader";
import { TimelineItemContent } from "./TimelineItemContent/TimelineItemContent";

export interface TimelineItemProps {
  headerText: string;
  timelineItem: React.ReactNode;
  markerType: 'warning' | 'danger' | 'primary';
  onClick: () => void;
}


export const TimelineItem: React.FC<TimelineItemProps> = ({
  headerText,
  timelineItem,
  markerType,
  onClick
}) => {
  return (
    <div className="timeline-item is-primary" onClick={onClick}>
      <div className={`timeline-marker is-${markerType}`}></div>
      <div className="timeline-content">
        <TimelineItemHeader headerText={headerText} />
        <TimelineItemContent>{timelineItem}</TimelineItemContent>
      </div>
    </div>
  );
};
