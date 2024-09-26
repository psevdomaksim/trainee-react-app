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
  const [filteredCardList, setFilteredCardList] = useState();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchCardsThunkCreator());
  }, []);

  useEffect(() => {
    filterCards();
  }, [searchValue, cardList]);

  const filterCards = () => {
    let debounceTimeout;
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      setFilteredCardList(
        cardList.filter((card) => {
          return (
            card.header.toLowerCase().includes(searchValue.toLowerCase()) ||
            card.description.toLowerCase().includes(searchValue.toLowerCase())
          );
        })
      );
    }, 300);
  };

  return (
    <>
      <SearchInput handleChange={handleChange} />
      <section className="cards">
        {filteredCardList?.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </section>
    </>
  );
};

export default CardItemList;
