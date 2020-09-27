import * as React from "react";
import { TimelineItemHeader } from "./TimelineItemHeader/TimelineItemHeader";
import { TimelineItemContent } from "./TimelineItemContent/TimelineItemContent";

export interface TimelineItemProps {
  headerText: string;
  timelineItem: any;
  markerType: 'warning' | 'danger' | 'primary';
}


export const TimelineItem: React.FC<TimelineItemProps> = ({
  headerText,
  timelineItem,
  markerType,
}) => {
  return (
    <div className="timeline-item is-primary">
      <div className={`timeline-marker is-${markerType}`}></div>
      <div className="timeline-content">
        <TimelineItemHeader headerText={headerText} />
        <TimelineItemContent>{timelineItem}</TimelineItemContent>
      </div>
    </div>
  );
};
