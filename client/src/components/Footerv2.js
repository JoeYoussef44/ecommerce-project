import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function FooterV2() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#facebook' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='#twitter' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='#google' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='#instagram' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='#linkedin' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='#github' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <a href = '#top'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon='hamburger' className='me-3' />
                  BeiruTreaT
                </h6>
              </a>
              <p>
                BeiruTreaT is a Lebanese web platform that was founded in 2022. BeiruTreaT is based
                on a simple but powerful idea: delivering Lebanese mouthwatering candy, snacks and "mouneh" from
                Lebanon, directly to your front door through worldwide shipping.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Christmas Box
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Lover Day Box
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Birthday Box
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gift Box
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Company</h6>
              <p>
                <a href='#action' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tracking Map
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Beirut, BE 10012, LB
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                beirutreat.info@outlook.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +961 71 687 456
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +961 71 654 786
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
           BeiruTreaT
        </a>
      </div>
    </MDBFooter>
  );
}