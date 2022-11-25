import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2vh 4vw 2vh 2vw;
  width: 94vw;
  background: rgba(230, 230, 235, 0.2);
  backdrop-filter: blur(3px);
  z-index: 1;
  color: white;
  flex-direction: column;
`
export const Logo = styled.img`
  width: 60px; 
  height: 30px;
  cursor: pointer;
`
export const Text = styled.p`
  color: white;
`