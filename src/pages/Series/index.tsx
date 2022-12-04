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

const Series = () => {

  const [series, setSeries] = useState<ResponseData[]>([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("/series?");

  useEffect(() => {
    api
      .get(`${url}`)
      .then((response) => setSeries(response.data.data.results))
      .catch((error) => console.log(error));
  }, [url, search]);

  const searchMarvel = () => {
    setUrl(`/series?titleStartsWith=${search}`);
  };

  const handleButton = (e: any) => {
    e.preventDefault();
    if (e === "") {
      setUrl("/series?");
    }

    searchMarvel();
  };

  return (
    <Container>
      <Title>Series</Title>
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
        {series.map((serie) => (
          <Cards
            image={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            name={serie.title}
            description={serie.description}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Series;
