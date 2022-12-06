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
import ImageNotFound from "./../../assets/notfound.png";
import Loading from "../../components/Loading";

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
  const [selectedCharacter, setSelectedCharacter] = useState<ResponseData>();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleModal = (value: ResponseData) => {
    toggleModal();
    setSelectedCharacter(value);
  };

  const fetchCharacters = () => {
    setLoading(true);
    api
      .get(`${search}`)
      .then((response) => {
        setCharacters(response.data.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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

      {loading ? <Loading /> : 
        characters.length === 0 ? (
        <NotFound
          title="Oops, Jarvis didn't find anything."
          text="Check the name and try again."
          image={ImageNotFound}
        />
      ) : (
        <CardsContainer>
          <CardsContent>
            {characters.map((character, index) => (
              <CardContent onClick={() => handleModal(character)} key={index}>
                <Cards
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  name={character.name}
                  description={character.description}
                  showModal={showModal}
                />
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
      
      {showModal ? (
        <Modal character={selectedCharacter} handleModal={toggleModal} />
      ) : null}
    </Container>
  );
};

export default Characters;
