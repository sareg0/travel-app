import * as React from "react";
import { TimelineItemHeader } from "./TimelineItemHeader/TimelineItemHeader";
import { TimelineItemContent } from "./TimelineItemContent/TimelineItemContent";
import type { ContentfulEventEntry } from '../../../../App'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'


export interface TimelineItemProps {
  markerType: 'warning' | 'danger' | 'primary';
  data: ContentfulEventEntry;
  onClick: () => void;
}


export const TimelineItem: React.FC<TimelineItemProps> = ({
  markerType,
  data,
  onClick
}) => {
  return (
    <div className="timeline-item is-primary" onClick={onClick}>
      <div className={`timeline-marker is-${markerType}`}></div>
      <div className="timeline-content">
        <TimelineItemHeader headerText={data.fields.title} />
        <TimelineItemContent>{documentToReactComponents(data.fields.body)}</TimelineItemContent>
        <section className="columns is-multiline">
          {data.fields.media?.map((m) => {
            return (
              <picture className="image is-96x96 column is-4">
                <img key={m.sys.id} src={`${m.fields.file.url}?fit=thumb&w=192&h=192&q=50`} alt={m.fields.description || ""} />
              </picture>
            )
          })}
        </section>
      </div>
    </div>
  );
};
