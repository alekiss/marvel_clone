import React, { useState } from "react";
import { ResponseData } from "../../pages/Characters";
import Modal from "../Modal";
import { ModalContainer, ModalContent } from "../Modal/styles";
import { Container, Description, Image, Title } from "./styles";

type CardsProps = {
  characters?: ResponseData[];
  name?: string;
  image?: string;
  description?: string;
  handleModal?: () => void;
  showModal?: boolean;
};

const Cards: React.FC<CardsProps> = ({
  name,
  image,
  description,
  handleModal,
  showModal
}) => {

  return (
    <Container>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <Description>{description}</Description>

      {showModal ? (
        <Modal
          handleModal={handleModal}
          image={image}
          name={name}
          description={description}
        />
      ) : null}

    </Container>
  );
};

export default Cards;
