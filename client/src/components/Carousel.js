import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './Carousel.css'

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='images/boxTreatV2.png'
        alt='...'
      >
        <h5><MDBBtn className='carousel-button' href='/products'>Get Started</MDBBtn></h5>
        <p></p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='images/baklavaResized.png'
        alt='...'
      >
        <h5>Baklava</h5>
        <p>From south to north, taste authentic lebanese sweets.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='images/maamoulResized.png'
        alt='...'
      >
        <h5>Maamoul</h5>
        <p>By choosing this, you'll taste happiness</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='images/dabkeboxResized.png'
        alt='...'
      >
        <h5>Tarboush</h5>
        <p>Buy many of them so you can make your own tarboush.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}