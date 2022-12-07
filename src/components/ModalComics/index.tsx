import React, { useEffect, useState } from "react";
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
import { ComicData } from "../../model/comics";

type ModalProps = {
  handleModal: () => void;
  comic?: ComicData;
};

const ModalComics: React.FC<ModalProps> = ({ handleModal, comic }) => {

  return (
    <ModalContainer>
      <ModalContent>
        <Image src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} />
        <Descriptions>
          <CloseContainer>
            <CloseButton onClick={() => handleModal()} src={CloseIcon} />
          </CloseContainer>
          <Title>{comic?.title}</Title>
          <Description>{comic?.description}</Description>
          <Title2>Creators</Title2>
          <Description>
            {comic?.creators.items.map((item) => (
              <div>{item.name}</div>
            ))}
          </Description>
          <Title2>Serie</Title2>
          <Description>
            {comic?.series.name}
          </Description>
          <Title2>Stories</Title2>
          <Description>
            {comic?.stories.items.map((item) => (
              <div>{item.name}</div>
            ))}
          </Description>
        </Descriptions>
      </ModalContent>
    </ModalContainer>
  );
};

export default React.memo(ModalComics);
