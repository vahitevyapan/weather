import { FETCH_WEATHER } from "../actions/index";

export default function(state = { status: 200, data: [] }, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        status: action.payload.request.status,
        data: [action.payload.data, ...state.data]
      };
  }
  return state;
}
