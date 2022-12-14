import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 220px;
  height: 350px;
  background-color: white;
  flex-direction: column;
  margin: 20px 0;
  color: black;
  border-radius: 0 0 20px 0;
  cursor: pointer;

  :hover{
    scale: 1.1;
    background-color: #e62429;
    color: white;
    transition: background-color, color .2s;
  }
`;

export const Image = styled.img`
  height: 200px;
  overflow: hidden;

`
export const Title = styled.h3`
  font-weight: 700;
  padding: 10px 0 10px 10px;
  font-size: 22px;
`
export const Description = styled.p`
  padding: 0 10px 0 10px;
`
