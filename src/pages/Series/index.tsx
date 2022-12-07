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
import ModalSeries from "../../components/ModalSeries";
import ImageNotFound from "./../../assets/notfound3.png";
import Loading from "../../components/Loading";
import { MarvelResponseData } from "../../model/marvelResponse";
import { SerieData } from "../../model/serie";

const Series = () => {
  const [series, setSeries] = useState<SerieData[]>([]);
  const [search, setSearch] = useState("/series?");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedSerie, setSelectedSerie] = useState<SerieData>();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleModal = (value: SerieData) => {
    toggleModal();
    setSelectedSerie(value);
  };

  const fetchSeries = () => {
    setLoading(true);
    api
      .get<MarvelResponseData<SerieData>>(`${search}`)
      .then((response) => {
        setSeries(response.data.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleMore = useCallback(async () => {
    try {
      const offset = series.length;
      const response = await api.get(`${search}`, {
        params: {
          offset,
        },
      });

      setSeries([...series, ...response.data.data.results]);
    } catch (error) {
      console.log(error);
    }
  }, [series, search]);

  useEffect(() => {
    fetchSeries();
  }, [search]);

  const onChangeHandler = (event: any) => {
    event.target.value.length === 0
      ? setSearch("/series?")
      : setSearch(`/series?titleStartsWith=${event.target.value}`);
  };

  return (
    <Container>
      <Title>Series</Title>
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
      ) : series.length === 0 ? (
        <NotFound
          title="S@*#%, I missed the shot."
          text="Check the name and try again."
          image={ImageNotFound}
        />
      ) : (
        <CardsContainer>
          <CardsContent>
            {series.map((serie, index) => (
              <CardContent onClick={() => handleModal(serie)} key={index}>
                <Cards
                  image={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                  name={serie.title}
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
        <ModalSeries serie={selectedSerie} handleModal={toggleModal} />
      ) : null}
    </Container>
  );
};

export default Series;
