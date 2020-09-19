import * as React from "react";
import { TimelineItemHeader } from "./TimelineItemHeader/TimelineItemHeader";
import { TimelineItemContent } from "./TimelineItemContent/TimelineItemContent";
import { BaseMarker } from "./TimelineMarker/BaseMarker/BaseMarker";

export interface TimelineItemProps {
  headerText: string;
  timelineItem: any;
}
//timelineitem
//is-warning
//is-danger

export const TimelineItem: React.FC<TimelineItemProps> = ({
  headerText,
  timelineItem,
}) => {
  return (
    <div className="timeline-item is-primary">
      <BaseMarker type="danger" />
      <div className="timeline-content">
        <TimelineItemHeader headerText={headerText} />
        <TimelineItemContent>{timelineItem}</TimelineItemContent>
      </div>
    </div>
  );
};
