import React, { useState } from "react";
import { Container, Content, Input } from "./styles";

const Search = () => {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event: any) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }

    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );

    setFilterList(filteredValues);
  };

  return (
    <Container>
        <Input
          className="filter_search"
          onChange={handleSearch}
          placeholder="Search..."
        />

      {filterList.map((item, index) => (
        <Content key={index}>
          {item}
        </Content>
      ))}
    </Container>
  );
};

export default Search;
