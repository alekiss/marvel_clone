import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 101px auto;
`;
export const Title = styled.h1`
  color: white;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
  gap: 25px;
`;
export const Search = styled.input`
  padding: 10px;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  margin-top: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    margin-left: 20px;
    width: 50px;
    height: 50px;
    color: white;
    cursor: pointer;
  }
`