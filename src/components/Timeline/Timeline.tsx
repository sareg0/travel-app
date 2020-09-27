import * as React from "react";
import { TimelineHeader } from "./subcomponents/TimelineHeader/TimelineHeader";
import { TimelineItem } from "./subcomponents/TimelineItem/TimelineItem";
import { EventDataList } from "../../data";
export interface TimelineProps {
  events: EventDataList;
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline is-rtl">
      <TimelineHeader size="m" text="Start!" />
      {events.map((event) => (
        <TimelineItem
          key={event.id}
            markerType="danger"
            headerText={event.headline}
            timelineItem={event.body}
          />
      )
      )}
      <TimelineHeader size="m" text="End!" />
    </div>
  );
};
