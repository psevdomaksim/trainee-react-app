import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Card.css";
import CardItem from "./CardItem";
import SearchInput from "../SearchInput/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsThunkCreator } from "../../redux/ActionCreators/CardsActionCreator";

const CardItemList = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const cardList = useSelector((state) => state.cardsPage.cards);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeoutId = setTimeout(() => {
      dispatch(fetchCardsThunkCreator(searchValue));
    }, 300);
    setDebounceTimeout(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchValue, dispatch]);

  return (
    <>
      <SearchInput handleChange={handleChange} />
      <section className="cards">
        {cardList?.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </section>
    </>
  );
};

export default CardItemList;
