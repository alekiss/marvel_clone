import React from "react";
import { Container, Image, Text, TextContainer, Title } from "./styles";
import ImageNotFound from "./../../assets/notfound.png";

const NotFound = () => {
  return (
    <Container>
      <TextContainer>
        <Title>
        Oops, Jarvis didn't find anything.
        </Title>
        <Text>
          Check the name and try again.
        </Text>
      </TextContainer>
      <Image src={ImageNotFound} />
    </Container>
  );
};

export default NotFound;
