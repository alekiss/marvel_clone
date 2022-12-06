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
} from "./styles";
import CloseIcon from "./../../assets/Close.png";
import { ResponseData } from "../../pages/Characters";

type ModalProps = {
  handleModal: () => void;
  character?: ResponseData;
};

export interface ResponseDataModal {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  series: {
    items: {
      name: string;
    };
  };
  comics: {
    items: {
      name: string;
    };
  };
}

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
          {/* Séries
          <Description>
            {character?.comics.items.map((i: any) => (
              <div>{i.name}</div>
            ))}
          </Description> */}
        </Descriptions>
      </ModalContent>
    </ModalContainer>
  );
};

export default React.memo(Modal);
