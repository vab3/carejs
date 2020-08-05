import React from 'react';
import Event from './Event';

const EventList = (props) => {
  if(props.events.length === 0) {
    return <div>Loading...</div>;
  } else {
    const events = props.events.map((event) => {
      return <Event event={event} />
    });
    return <div className="card-columns">{events}</div>;
  }
};

export default EventList;
