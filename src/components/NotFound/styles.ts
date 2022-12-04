import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  flex-direction: column;
  margin: 30px auto 0;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
    color: white;
    font-weight: bold;
`
export const Text = styled.h2`
    color: white;
`

export const Image = styled.img`
    width: 400px;
`