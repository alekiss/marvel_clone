import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: column;
`;
export const ModalContent = styled.div`
  width: 70%;
  max-height: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 15px;
  overflow: auto;
`;
export const Descriptions = styled.div`
  padding: 10px;
  overflow-y: scroll;
`;

export const CloseButton = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

export const Title = styled.h1`
  margin: 10px 0 20px;
`
export const Title2 = styled.h2`
  margin: 10px 0 10px;
`
export const Description = styled.p`
  margin: 10px 0 10px;
`
