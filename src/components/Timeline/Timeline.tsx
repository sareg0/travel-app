import * as React from "react";
import { TimelineHeader } from "./subcomponents/TimelineHeader/TimelineHeader";
import { TimelineItem } from "./subcomponents/TimelineItem/TimelineItem";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
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
            markerType={selectedEventId == item.sys.id ? "danger" : 'primary'}
            headerText={item.fields.title}
            timelineItem={documentToReactComponents(item.fields.body)}
          />
      )
      )}
      <TimelineHeader size="m" text="End!" />
    </div>
  );
};
