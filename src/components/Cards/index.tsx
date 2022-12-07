import React, { useState } from "react";
import { CharacterData } from "../../model/character";
import { Container, Image, Title } from "./styles";

type CardsProps = {
  name?: string;
  image?: string;
};

const Cards: React.FC<CardsProps> = ({
  name,
  image,
}) => {

  return (
    <Container>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
    </Container>
  );
};

export default Cards;
