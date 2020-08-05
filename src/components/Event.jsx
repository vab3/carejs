import React from 'react';

const Event = (props) => {
  console.log(props);
  const { id, title, start_time_iso_string, activity_location} = props.event;
  const start_time_as_date = new Date(start_time_iso_string);
  const month = start_time_as_date.getMonth();
  const day = start_time_as_date.getDate();
  const year = start_time_as_date.getYear();
  let formatted_date = 'date TBD '
  console.log("month" + month);
  if(!isNaN(month)){
    formatted_date = `${month}/${day}/${year}`
  }
  
  let location = 'location TBD';
  if(activity_location) {
    location = `${activity_location.location.line1}, ${activity_location.location.city}`;
  }

  const img_url = props.event.provider.image_small

  return (
    <div key={ id } className="card" >
      <img src={img_url} className="card-img-top" alt="" />
      <div className="card-body">
        <h5>{ title }</h5>
        <ul>
          <li>{ formatted_date }</li>
          <li>{ location }</li>
        </ul>
      </div>

    </div>
  );

}

export default Event;
