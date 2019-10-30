import { GET_CAT_GIFS } from '../actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CAT_GIFS:
      return { 
        ...state,
        gifs: action.content
      };
    default:
      return state;
  }
}
