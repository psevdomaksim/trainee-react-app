import { FETCH_CARDS } from "../../utils/ActionCreator_consts";

let initialState = {
  cards: [],
};

const CardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS: {
      state = { ...state, cards: action.data };
      return state;
    }

    default:
      return state;
  }
};

export default CardsReducer;
