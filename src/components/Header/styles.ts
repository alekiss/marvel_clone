import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 4vw 2vh 2vw;
  position: fixed;
  top: 0;
  width: 94vw;
  background: rgba(230, 230, 235, 0.2);
  backdrop-filter: blur(3px);
  z-index: 1;
`

export const Logo = styled.img`
  width: 90px; 
  height: 50px;
  cursor: pointer;
`
export const Options = styled.div`
  display: flex;
  flex-direction: row;
`
export const Text = styled.h2`
  padding: 0 10px;
  cursor: pointer;
  color: white;
`