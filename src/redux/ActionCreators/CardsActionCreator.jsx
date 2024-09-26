import { fetchCards } from "../../http/cardsApi";
import { FETCH_CARDS } from "../../utils/actionCreator_consts";

// fetch cards
export const fetchCardsActionCreator = (data) => {
  return {
    type: FETCH_CARDS,
    data: data,
  };
};

export const fetchCardsThunkCreator = () => {
  return (dispatch) => {
    fetchCards().then((data) => {
      dispatch(fetchCardsActionCreator(data));
    });
  };
};
