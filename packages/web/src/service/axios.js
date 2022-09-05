import axios from "axios";
//We can configure this base URL setup to work with respective environment.
const client = axios.create({
  baseURL: "http://localhost:9000/",
});

export default client;
