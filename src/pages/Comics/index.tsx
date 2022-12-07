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
import NotFound from "../../components/NotFound";
import ViewMoreIcon from "./../../assets/s2.png";
import ModalComics from "../../components/ModalComics";
import ImageNotFound from "./../../assets/notfound2.png";
import Loading from "../../components/Loading";
import { MarvelResponseData } from "../../model/marvelResponse";
import { ComicData } from "../../model/comics";

const Comics = () => {
  const [comics, setComics] = useState<ComicData[]>([]);
  const [search, setSearch] = useState("/comics?");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedComic, setSelectedComic] = useState<ComicData>();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleModal = (value: ComicData) => {
    toggleModal();
    setSelectedComic(value);
  };

  const fetchComics = () => {
    setLoading(true);
    api
      .get<MarvelResponseData<ComicData>>(`${search}`)
      .then((response) => {
        setComics(response.data.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleMore = useCallback(async () => {
    try {
      const offset = comics.length;
      const response = await api.get(`${search}`, {
        params: {
          offset,
        },
      });

      setComics([...comics, ...response.data.data.results]);
    } catch (error) {
      console.log(error);
    }
  }, [comics, search]);

  useEffect(() => {
    fetchComics();
  }, [search]);

  const onChangeHandler = (event: any) => {
    event.target.value.length === 0
      ? setSearch("/comics?")
      : setSearch(`/comics?titleStartsWith=${event.target.value}`);
  };

  return (
    <Container>
      <Title>Comics</Title>
      <SearchContainer>
        <Search
          type="search"
          placeholder="Search Here"
          className="search"
          onChange={onChangeHandler}
        />
      </SearchContainer>

      {loading ? (
        <Loading />
      ) : comics.length === 0 ? (
        <NotFound
          title="WARNING, HYDRA INFILTRATION."
          text="Check the name and try again."
          image={ImageNotFound}
        />
      ) : (
        <CardsContainer>
          <CardsContent>
            {comics.map((comic, index) => (
              <CardContent onClick={() => handleModal(comic)} key={index}>
                <Cards
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  name={comic.title}
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
        <ModalComics comic={selectedComic} handleModal={toggleModal} />
      ) : null}
    </Container>
  );
};

export default Comics;
