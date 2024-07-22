import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Imgrefresher from './images/logo.avif';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Header from './header';
import Home from './home';

const Navbar = () => {
  const [data, setData] = useState(false);
  const [menu, setMenu] = useState(false);

  const inputHandler = () => {
    setData(!data);
    console.log(!data)

  };

  const menuHandler = () => {
    setMenu(!menu);
    console.log(!menu)
  };

  return (
    <>
    <Header/>
    <div>
      <div className="navbar_div">
        <div className={data ? 'input_form' : 'input_form_not'}>
          <input type="text" placeholder="Search here" />
          <SearchIcon className="Search_icon_input" />
          <CloseIcon onClick={inputHandler} className="close_icon" />
        </div>
        <div className={data ? 'header' : ''}>
          <div className="navbar_main">
            <div>
              <div onClick={inputHandler}>
                <SearchIcon className="Search_icon" />
              </div>
              <MenuIcon onClick={menuHandler} className="menu_icon" />
            </div>
            <div>
              <img src={Imgrefresher} className="heading_logo" alt="Logo" />
            </div>
            <div className="bad_search">
              <SearchIcon onClick={inputHandler} className="Search_icon2" />
              <ShoppingBagIcon className="bag_icon" />
            </div>
          </div>
          <div className="Nav_links">
            <Link to="/" className="link">Home</Link>
            <Link to="/contact" className="link">Contact</Link>
            <Link to="/priracy" className="link">Privacy</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/loginform" className="link">Signup</Link>
          </div>
          <div className={menu ? 'sidebar2' : 'sidebar1'}>
            <Link to="/" className="sidebar_link">Home</Link>
            <Link to="/contact" className="sidebar_link">Contact</Link>
            <Link to="/priracy" className="sidebar_link">Privacy</Link>
            <Link to="/about" className="sidebar_link">About</Link>
            <Link to="/loginform" className="sidebar_link">Signup</Link>
          </div>
        </div>
      </div>
    </div>
      <Home/>
    </>
  );
};

export default Navbar;
