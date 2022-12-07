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
import { CharacterData } from "../../model/character";

type ModalProps = {
  handleModal: () => void;
  character?: CharacterData;
};

const Modal: React.FC<ModalProps> = ({ handleModal, character }) => {

  return (
    <ModalContainer>
      <ModalContent>
        <Image
          src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
        />
        <Descriptions>
          <CloseContainer>
            <CloseButton onClick={() => handleModal()} src={CloseIcon} />
          </CloseContainer>
          <Title>{character?.name}</Title>
          <Description>{character?.description}</Description>
          <Title2>Series</Title2>
          <Description>
            {character?.series.items.map((item) => (
              <div>{item.name}</div>
            ))}
          </Description>
          <Title2>Comics</Title2>
          <Description>
            {character?.comics.items.map((item) => (
              <div>{item.name}</div>
            ))}
          </Description>
        </Descriptions>
      </ModalContent>
    </ModalContainer>
  );
};

export default React.memo(Modal);
