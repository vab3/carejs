import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.getgalore-staging.com/v1/events?distance=500&latitude=37.7749295&longitude=-122.4194155',
  headers: {
    "Api-Key": 'y7LfciquwtdT4gCQgnNMzQxx'
  }

})
