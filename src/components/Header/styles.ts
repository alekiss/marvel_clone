import styled from "styled-components";

import { device } from "../../assets/styles/Breakpoints";

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

  .active {
    border-bottom: 3px solid #e62429;
    color: #e62429;
    font-size: 35px;
  }

  ${device.sm`
    display: none;
    `}
`
export const OptionsSmall = styled.div`
@media screen and (min-width: 768px) {
  display:none;
}

  display: flex;
  flex-direction: row;
  position: relative;

  .active {
    border-bottom: 3px solid #e62429;
    color: #e62429;
    font-size: 35px;
  }

  svg{
    color: white;
    cursor: pointer;
  }
`
export const ModalOptions = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  background-color: black;
  height: 100vw;
  width: 50%;
  top: 0;
  right: 0;
  padding: 10px;

  svg{
    color: white;
    width: 40px;
    height: 40px;
  }
`

export const Text = styled.h2`
  padding: 0 10px;
  cursor: pointer;
  color: white;
  font-size: 30px;

  :hover {
    border-bottom: 3px solid #e62429;
  }
`