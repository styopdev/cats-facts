import { ActionTypes, SET_FACTS } from './facts.actions'; 
export const initialState = {};
 
export function factsReducer(state = initialState, action: SET_FACTS) {
  switch (action.type) {
    case ActionTypes.SET_FACTS:
      return Object.assign({}, state, ...action.payload);
    default:
      return state;
  }
}