// const axios = require("axios");
let data = require("../graph");

// The axios base url could be different for different services. here the axios should point to graph base url
// const graphApi = axios.create({
//   baseURL: "http://localhost:9000/",
// });

const GraphService = {
  graphData: async (id) => {
    // fetching the all graph data and then filtering the result base on the id data;
    // const { data } = await graphApi.get("data/graphs.json");

    const result = id == null ? data : data.filter((item) => item.id === id);
    return result;
  },
  deleteGraphById: async (id) => {
    // Here I'm executing delete api call.
    //  fetching the all graph data and then filtering ids which are not same as provided id
    // const { data } = await graphApi.get("data/graphs.json");
    data = data.filter((item) => item.id !== id);
    return data;
  },
  createGraph: async (graph) => {
    data = [...data, graph];
    return data;
  },
};

module.exports = GraphService;
