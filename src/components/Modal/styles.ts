import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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
  width: 60%;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 8px;
`;
export const CloseButton = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
`
export const Image = styled.img`
  width: 100%;
  height: 300px;
`