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

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filterCards = () => {
    let debounceTimeout;
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      dispatch(fetchCardsThunkCreator(searchValue));
    }, 300);
  };

  useEffect(() => {
    filterCards();
  }, [searchValue]);

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
