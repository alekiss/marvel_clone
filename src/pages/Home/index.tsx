import React, { useEffect, useState } from "react";
import { Container, Slider } from "./styles";
import ImageGallery from "react-image-gallery";

function App() {

  const images = [
    {
      original: "https://disneyplusbrasil.com.br/wp-content/uploads/2022/08/Marvel-Studios-MCU.jpg",
    },
    {
      original: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/23_sm_dcl_marveldayatsea_post_v2_bu_blogcover.jpg",
    },
    {
      original: "https://t2.tudocdn.net/632879?w=1920",
    },
    {
      original: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA2E198288BFCA56AB53340211B38DE7134E40E4521EDCAFE6FFB8CD69250DE9/scale?width=2880&aspectRatio=1.78&format=jpeg",
    },
    {
      original: "https://sm.ign.com/ign_in/news/m/marvel-sdc/marvel-sdcc-2022-announcements-recap_5kqt.jpg",
    },
  ];

  return (
    <Container>
      <Slider>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showNav={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
          // autoPlay={true}
          slideInterval={5000}
          useBrowserFullscreen={false}
        />
      </Slider>
    </Container>
  );
}

export default App;
