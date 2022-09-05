export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_GRAPH":
      return {
        ...state,
        graphList: [...action.payload],
      };
    case "CREATE_GRAPH":
      return {
        ...state,
        graphList: [...state.graphList, action.payload],
      };

    case "DELETE_GRAPH":
      return {
        ...state,
        graphList: state.graphList.filter(
          (graph) => graph.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
