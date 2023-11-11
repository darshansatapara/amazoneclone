import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-e697d/us-central1/api",
  withCredentials: true,  // Add this line to include credentials (cookies) in the request
});

export default instance;
