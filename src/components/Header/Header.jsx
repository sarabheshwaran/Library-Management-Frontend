import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <div class='n'>
            <Navbar />
            </div>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Search for the right Book.</h2><br />
                <p className='header-text fs-18 fw-3'> Immerse yourself in a world of captivating literature, groundbreaking research, and thought-provoking resources!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header