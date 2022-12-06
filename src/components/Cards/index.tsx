import React, { useState } from "react";
import { ResponseData } from "../../pages/Characters";
import { Container, Image, Title } from "./styles";

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
    </Container>
  );
};

export default Cards;
