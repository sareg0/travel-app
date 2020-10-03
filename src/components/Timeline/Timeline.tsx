import * as React from "react";
import { TimelineHeader } from "./subcomponents/TimelineHeader/TimelineHeader";
import { TimelineItem } from "./subcomponents/TimelineItem/TimelineItem";

import type {ContentfulEventEntryCollection} from '../../App'
export interface TimelineProps {
  data: ContentfulEventEntryCollection;
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="timeline is-rtl">
      <TimelineHeader size="m" text="Start!" />
      {data.items.map((item,) => (
        <TimelineItem
          key={item.sys.id}
            markerType="danger"
            headerText={item.fields.title}
            timelineItem={JSON.stringify(item.fields.body)}
          />
      )
      )}
      <TimelineHeader size="m" text="End!" />
    </div>
  );
};
