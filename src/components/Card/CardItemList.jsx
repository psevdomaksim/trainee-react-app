import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Card.css";
import { cards } from "../../db";
import CardItem from "./CardItem";
import SearchInput from "../SearchInput/SearchInput";

const CardItemList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cardList, setCardList] = useState(cards);
  const [filteredCardList, setFilteredCardList] = useState(cards);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

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

  useEffect(() => {
    filterCards();
  }, [searchValue]);

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
