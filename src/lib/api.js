import axios from "axios";

export const getData = () =>
  // axios.get(`http://${process.env.REACT_APP_SERVER_ADDRESS}/users`);
  axios.get(`http://18.221.28.100:4000/users`);
