import React, { useEffect, useState } from "react";
import { CardsContainer, Container, Search, SearchContainer, Title } from "./styles";
import api from "../../services/api";
import Cards from "../../components/Cards";
import { ImSearch } from "react-icons/im";

export interface ResponseData {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Comics = () => {

  const [comics, setComics] = useState<ResponseData[]>([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("/comics?");

  useEffect(() => {
    api
      .get(`${url}`)
      .then((response) => setComics(response.data.data.results))
      .catch((error) => console.log(error));
  }, [url, search]);

  const searchMarvel = () => {
    setUrl(`/comics?titleStartsWith=${search}`);
  };

  const handleButton = (e: any) => {
    e.preventDefault();
    if (e === "") {
      setUrl("/comics?");
    }

    searchMarvel();
  };

  return (
    <Container>
      <Title>Comics</Title>
      <SearchContainer>
        <Search
          type="search"
          placeholder="Search Here"
          className="search"
          onChange={(e) => setSearch(e.target.value)}
          // onKeyPress={searchMarvel}
        />
        <ImSearch onClick={handleButton} />
      </SearchContainer>

      <CardsContainer>
        {comics.map((comic) => (
          <Cards
            image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            name={comic.title}
            description={comic.description}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Comics;
