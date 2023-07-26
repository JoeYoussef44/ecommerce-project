import React, { useState ,useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import './Navbar.css';
import axios from 'axios';




export default function NavbarComp({ handleLoginClick }) {
  
  const[meals ,setMeals] = useState([]);
  useEffect(() => {
    const loadMeals = async () => {
      const response = await axios.get('https://reqres.in/api/users');
      console.log(response.data);
      setMeals(response.data.data);
    }
    loadMeals();
  } ,[])

  const handleClickLogin = () => {
    handleLoginClick();
  };
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='sticky-top'>
      <MDBContainer fluid className='items-align'>
        <MDBNavbarBrand href='/'>BeiruTreaT</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#action1'>
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/products'>Products</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Customize
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='https://packlane.com/#choose-style' target='_blank'>Lover Day</MDBDropdownItem>
                  <MDBDropdownItem link href='https://packlane.com/#choose-style' target='_blank'>Boxing Day</MDBDropdownItem>
                  <MDBDropdownItem link href='https://packlane.com/#choose-style' target='_blank'>Gift Box</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleClickLogin}>
                Login
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/shoppingCart'>
              <MDBIcon fas icon="shopping-cart" className='cart-position'/>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          

          <form className='d-flex input-group w-auto'>
        
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}