import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Home() {
    return (


    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'/images/DIGI_0020_18687_R.Low.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'images/DIGI_0020_19580_R.tif.LQ.jpg'}

          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
<Carousel.Item>
        <img
          className="d-block w-100"
          src={'images/DIGI_0020_107027_R.tif.LQ.jpg'}

          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;