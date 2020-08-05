import React from 'react';
import Event from './Event';

const EventList = (props) => {
  const events = props.events.map((event) => {
    return <Event name={event.title} />
  });
  return <div>{events}</div>;
};

export default EventList;
