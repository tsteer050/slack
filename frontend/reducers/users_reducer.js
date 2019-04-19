import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CHANNELS } from '../actions/channel_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {

  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_CHANNELS:
      return merge({}, state, action.payload.users)
    default:
      return state;
  }
};






