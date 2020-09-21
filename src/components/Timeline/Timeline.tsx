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
      <TimelineItem
        headerText="January 2016"
        timelineItem={
          <>
            <p>Timeline content - Can include any HTML element</p>
            <p>Timeline content - Can include any HTML element</p>
            <p>Timeline content - Can include any HTML element</p>
          </>
        }
      />
      <TimelineItem
        headerText="January 2016"
        timelineItem={
          <>
            <p>Timeline content - Can include any HTML element</p>
            <p>Timeline content - Can include any HTML element</p>
            <p>Timeline content - Can include any HTML element</p>
          </>
        }
      />
      <TimelineHeader text="2017" />
      <TimelineItem
        headerText="January 2016"
        timelineItem={
          <>
            <p>Timeline content - Can include any HTML element</p>
            <p>Timeline content - Can include any HTML element</p>
            <p>Timeline content - Can include any HTML element</p>
          </>
        }
      />
      <TimelineHeader size="m" text="End!" />
    </div>
  );
};
