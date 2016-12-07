import {LOAD_STATE_FROM_DATABASE} from "../actions/ActionTypes";
const DataBaseReducer = (state = [], action) => {
  switch (action.type) {
      case LOAD_STATE_FROM_DATABASE:
          return action.payload;
      default:
          return state;
  }

};

export default DataBaseReducer;