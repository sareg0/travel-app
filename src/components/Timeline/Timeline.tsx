import * as React from "react";
import { TimelineHeader } from "./subcomponents/TimelineHeader/TimelineHeader";
import { TimelineItem } from "./subcomponents/TimelineItem/TimelineItem";
import type {ContentfulEventEntryCollection} from '../../App'

export interface TimelineProps {
  data: ContentfulEventEntryCollection;
  selectedEventId?: string,
  onClick: (id: string) => void
}

export const Timeline: React.FC<TimelineProps> = ({ data, selectedEventId, onClick }) => {
  return (
    <div className="timeline is-rtl">
      <TimelineHeader size="m" text="Start!" />
      {data.items.map((item,) => (
      <TimelineItem
          onClick={() => onClick(item.sys.id)}
          key={item.sys.id}
            markerType={selectedEventId === item.sys.id ? "danger" : 'primary'}
            data={item}
          />
      )
      )}
      <TimelineHeader size="m" text="End!" />
    </div>
  );
};
