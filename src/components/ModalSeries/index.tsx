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
} from "./styles";
import CloseIcon from "./../../assets/Close.png";
import { ResponseData } from "../../pages/Series";

type ModalProps = {
  handleModal: () => void;
  serie?: ResponseData;
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

const ModalSeries: React.FC<ModalProps> = ({ handleModal, serie }) => {

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
        </Descriptions>
      </ModalContent>
    </ModalContainer>
  );
};

export default React.memo(ModalSeries);
