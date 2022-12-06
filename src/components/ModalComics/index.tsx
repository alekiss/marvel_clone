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
import { ResponseData } from "../../pages/Comics";

type ModalProps = {
  handleModal: () => void;
  comic?: ResponseData;
};

export interface ResponseDataModal {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

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
        </Descriptions>
      </ModalContent>
    </ModalContainer>
  );
};

export default React.memo(ModalComics);
