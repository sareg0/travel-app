import * as React from "react";
import { TimelineItemHeader } from "./TimelineItemHeader/TimelineItemHeader";
import type { ContentfulEventEntry } from '../../../../App'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {format, parseISO} from 'date-fns'

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
        <TimelineItemHeader headerText={format(parseISO(data.fields.timestamp), 'MM/dd/yyyy')} />
        <div className="content">{documentToReactComponents(data.fields.body)}</div>
        <section className="columns is-multiline">
          {data.fields.media?.map((m) => {
            return (
              <a href={`${m.fields.file.url}?w=1024&q=80`} target="_blank" rel="noopener noreferrer" key={m.sys.id} className="column is-4">
                <picture className="image">
                  <img src={`${m.fields.file.url}?fit=thumb&w=192&h=192&q=50`} alt={m.fields.description || ""} />
                </picture>
              </a>
            )
          })}
        </section>
      </div>
    </div>
  );
};
