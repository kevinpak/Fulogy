import React from 'react';
import './header.css';

const Header = () =>{
	return(
		<header className="header">
		<div className="container">
		<div className="cols header-content row-between">
		<div className="col header-content-logo">
		<a href="#">
		<img src="./assets/images/logo.jpg"/>
		</a>
		</div>
		<div className="col header-content-nav">
		<a href="#" className="header-content-nav-cart icon-basket">
		<span>1</span>
		</a>
		<a href="#" className="mobile__nav__btn"><span></span></a>
		</div>
		</div>
		</div>
		</header>
		);
}

export default Header;
