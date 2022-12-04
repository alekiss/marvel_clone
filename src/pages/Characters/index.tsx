import React, { useCallback, useEffect, useState } from "react";
import {
  CardContent,
  CardsContainer,
  CardsContent,
  Container,
  Search,
  SearchContainer,
  Title,
  ViewMore,
  ViewMoreContainer,
  ViewMoreImg,
} from "./styles";
import api from "../../services/api";
import Cards from "../../components/Cards";
import Modal from "../../components/Modal";
import NotFound from "../../components/NotFound";
import ViewMoreIcon from "./../../assets/s2.png";

export interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Characters = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);
  const [search, setSearch] = useState("/characters?");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const fetchCharacters = () => {
    api
      .get(`${search}`)
      .then((response) => setCharacters(response.data.data.results))
      .catch((error) => console.log(error));
  };

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get(`${search}`, {
        params: {
          offset,
        },
      });

      setCharacters([...characters, ...response.data.data.results]);
    } catch (error) {
      console.log(error);
    }
  }, [characters, search]);

  useEffect(() => {
    fetchCharacters();
  }, [search]);

  const onChangeHandler = (event: any) => {
    event.target.value.length === 0
      ? setSearch("/characters?")
      : setSearch(`/characters?nameStartsWith=${event.target.value}`);
  };

  console.log(characters)

  return (
    <Container>
      <Title>Characters</Title>
      <SearchContainer>
        <Search
          type="search"
          placeholder="Search Here"
          className="search"
          onChange={onChangeHandler}
        />
      </SearchContainer>

      {characters.length === 0 ? (
        <NotFound />
      ) : (
        <CardsContainer>
          <CardsContent>
            {characters.map((character) => (
              <CardContent onClick={handleModal}>
                <Cards
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  name={character.name}
                  description={character.description}
                  handleModal={handleModal}
                  showModal={showModal}
                />

                {/* {showModal ? (
                  <Modal
                    handleModal={handleModal}
                    image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    name={character.name}
                    description={character.description}
                  />
                ) : null} */}
              </CardContent>
            ))}
          </CardsContent>
          <ViewMoreContainer>
            <ViewMore onClick={handleMore}>
              View More <ViewMoreImg src={ViewMoreIcon} />
            </ViewMore>
          </ViewMoreContainer>
        </CardsContainer>
      )}
    </Container>
  );
};

export default Characters;
