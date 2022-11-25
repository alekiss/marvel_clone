import React from 'react';
import { Container, Slider } from './styles';
import ImageGallery from 'react-image-gallery'

function App() {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',

    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
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
