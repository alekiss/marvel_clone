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
`;
export const CardsContent = styled.div`
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
`;
export const CardContent = styled.div``;

export const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ViewMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  width: 180px;
  font-size: 22px;
  font-family: "MArvel", sans-serif;
  font-weight: 700;
  cursor: pointer;
  color: black;
  background-color: white;

  :hover {
    background-color: #e62429;
    color: white;
  }
`;
export const ViewMoreImg = styled.img`
  width: 25px;
  margin-left: 5px;
`;
