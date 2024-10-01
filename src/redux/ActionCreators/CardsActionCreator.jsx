import { fetchCards } from "../../http/cardsApi";
import { FETCH_CARDS } from "../../utils/ActionCreator_consts";

// fetch cards
export const fetchCardsActionCreator = (data) => {
  return {
    type: FETCH_CARDS,
    data: data,
  };
};

export const fetchCardsThunkCreator = (searchValue) => {
  return (dispatch) => {
    fetchCards(searchValue).then((data) => {
      dispatch(fetchCardsActionCreator(data));
    });
  };
};
