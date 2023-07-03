import React, { useState } from "react";
import {
  Container,
  Logo,
  ModalOptions,
  Options,
  OptionsSmall,
  Text,
} from "./styles";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"

const Header = () => {
  const [activeNav, setActiveNav] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo
          src="https://journalist-machinery-28864.netlify.app/img/MarvelLogo1.svg"
          onClick={() => setActiveNav("")}
        />
      </Link>
      <Options>
        <Link to="/characters" style={{ textDecoration: "none" }}>
          <Text
            onClick={() => setActiveNav("characters")}
            className={activeNav === "characters" ? "active" : ""}
          >
            Characters
          </Text>
        </Link>
        <Link to="/comics" style={{ textDecoration: "none" }}>
          <Text
            onClick={() => setActiveNav("comics")}
            className={activeNav === "comics" ? "active" : ""}
          >
            Comics
          </Text>
        </Link>
        <Link to="/series" style={{ textDecoration: "none" }}>
          <Text
            onClick={() => setActiveNav("series")}
            className={activeNav === "series" ? "active" : ""}
          >
            Series
          </Text>
        </Link>
      </Options>
      <OptionsSmall>
        <GiHamburgerMenu onClick={handleModal}/>
      </OptionsSmall>

      {showModal ? (
        <ModalOptions>
          <MdClose onClick={handleModal}/>
          <Link to="/characters" style={{ textDecoration: "none" }}>
            <Text
              onClick={() => setActiveNav("characters")}
              className={activeNav === "characters" ? "active" : ""}
            >
              Characters
            </Text>
          </Link>
          <Link to="/comics" style={{ textDecoration: "none" }}>
            <Text
              onClick={() => setActiveNav("comics")}
              className={activeNav === "comics" ? "active" : ""}
            >
              Comics
            </Text>
          </Link>
          <Link to="/series" style={{ textDecoration: "none" }}>
            <Text
              onClick={() => setActiveNav("series")}
              className={activeNav === "series" ? "active" : ""}
            >
              Series
            </Text>
          </Link>
        </ModalOptions>
      ) : null}
    </Container>
  );
};

export default Header;
