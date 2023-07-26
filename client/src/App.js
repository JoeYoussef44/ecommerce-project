import React , { useState } from 'react';
import './App.css';
//import { Wrapper, Status } from "@googlemaps/react-wrapper";
import NavbarComp from './components/Navbarv2';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import ShoppingCartPage from './components/pages/ShoppingCart';
import Products from './components/pages/Products';
import Login from './components/modals/Login';
import SignIn from './components/modals/SignIn';
import UserInfos from './components/modals/UserInfos';



function App() {
  const[modalOpenLog ,setModalOpenLog] = useState(false);
  

  const handleLoginClick = () => {
    setModalOpenLog(true);
  };

  return (
    <>
      <Router>
        <NavbarComp handleLoginClick={ handleLoginClick }/>
        {modalOpenLog && <Login setOpenModal={ setModalOpenLog }/>}
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path="/shoppingCart" element={<ShoppingCartPage />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/sign-up" element={<SignIn />} />
          <Route path="/userDetails" element={<UserInfos />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
