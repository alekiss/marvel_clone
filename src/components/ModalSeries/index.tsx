import React from "react";
import {
  CloseButton,
  CloseContainer,
  Description,
  Descriptions,
  Image,
  ModalContainer,
  ModalContent,
  Title,
  Title2,
} from "./styles";
import CloseIcon from "./../../assets/Close.png";
import { SerieData } from "../../model/serie";

type ModalProps = {
  handleModal: () => void;
  serie?: SerieData;
};

const ModalSeries: React.FC<ModalProps> = ({ handleModal, serie }) => {

  console.log(serie)

  return (
    <ModalContainer>
      <ModalContent>
        <Image src={`${serie?.thumbnail.path}.${serie?.thumbnail.extension}`} />
        <Descriptions>
          <CloseContainer>
            <CloseButton onClick={() => handleModal()} src={CloseIcon} />
          </CloseContainer>
          <Title>{serie?.title}</Title>
          <Description>{serie?.description}</Description>
          <Title2>Creators</Title2>
          <Description>
            {serie?.creators.items.map((item) => (
              <div>{item.name}</div>
            ))}
          </Description>
          <Title2>Stories</Title2>
          <Description>
            {serie?.stories.items.map((item) => (
              <div>{item.name}</div>
            ))}
          </Description>
          <Title2>Comics</Title2>
          <Description>
            {serie?.comics.items.map((item) => (
              <div>{item.name}</div>
            ))}
          </Description>
        </Descriptions>
      </ModalContent>
    </ModalContainer>
  );
};

export default React.memo(ModalSeries);
