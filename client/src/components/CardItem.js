import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import './Cards.css';

export default function CardItem({ image, category ,description, type}) {
  return (
    <MDBCard className='margin-spacer'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={image} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{category}</MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>
        <MDBBtn className='align-button' href='/products'>View {type}</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}