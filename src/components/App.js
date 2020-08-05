import React from 'react';
import EventList from './EventList';
import care_events from '../api/care_events';


class App extends React.Component {
  state = { events: []}

  fetchEvents = async () => {
    console.log('fetching---------');
    const response = await care_events.get();
    const retval =  response.data.activities.concat(response.data.series);
    console.log(response);
    this.setState({ events: retval});
  };

  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <div className="container">
      <h1>CareJS</h1>
      <EventList events={this.state.events}/>
      </div>
    )
  }
}

export default App;
