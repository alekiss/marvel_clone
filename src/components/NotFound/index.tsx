import React from "react";
import { Container, Image, Text, TextContainer, Title } from "./styles";

type NotFoundProps = {
  title?: string;
  text?: string;
  image?: string
};

const NotFound: React.FC<NotFoundProps> = ({ title, text, image }) => {
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextContainer>
      <Image src={image} />
    </Container>
  );
};

export default NotFound;
