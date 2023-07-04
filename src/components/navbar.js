import React from 'react'
import SearchBar from "./pages/SearchBar";
import './css/navbar.css';

const navbar =()=> {
  return (

    <div className="wrapper">
    <nav className="navbar navbar-expand-lg fixed-top nav1 " data-bs-theme="dark">
   <div className="container-fluid">
  <a className="navbar-brand fw-bolder text-capitalize" href="/">DishPalette</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 <SearchBar/>
</div>
</nav>
  </div> 
  )
}

export default navbar
