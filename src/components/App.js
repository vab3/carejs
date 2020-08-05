import React from 'react';
import EventList from './EventList';
import care_events from '../api/care_events';

const events = care_events;

export default () => {
  return (
    <div>
    <h1>CareJS</h1>
    <EventList events={events}/>
    </div>
  )
}
