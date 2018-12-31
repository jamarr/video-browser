import axios from 'axios';

const KEY = 'AIzaSyDA21fz9yzE5VWzql4WB5FJrA1Bl0pGqs4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
