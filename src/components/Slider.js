import React from 'react'
import './css/navbar.css';

const Slider =() => {
  return (
    <div>
      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item c-item active">
      <img src="./images/img1.jpg"className="d-block w-90 c-img" alt="..."/>

      <div className="carousel-caption top-2 mt-100">
        <h5 className="mt-100 fs-3 text uppercase"style={{color: 'black'}}>Find Unlimited Recipes</h5>
        <p className="display-3 fw-bolder text-capitalize" style={{color: 'black', fontSize: '70px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Make easily and tasty dishes</p>
      </div>
    </div>

    <div className="carousel-item  c-item  active">
      <img src="./images/img2.jpg" className="d-block w-20 c-img" alt="..."/>
      <div className="carousel-caption top-2 mt-100">
        <p className="display-5 fw-bolder text-capitalize" style={{textAlign: 'left', fontSize: '90px', marginRight:'300px', marginBottom: '100px'}}>Eat Unlimited Dishes...</p>
        </div>
    </div>

    <div className="carousel-item  c-item  active">
      <img src="./images/img3.jpg" className="d-block w-100 c-img" alt="..."/>
      <div className="carousel-caption top-2 mt-100">
     
        <p className="display-3 fw-bolder text-capitalize"  style={{textAlign: 'right', fontSize: '100px', marginLeft:'350px', marginBottom: '70px',marginTop:'200px'}}>Search Any Recipes</p>
        <h5 className="mt-100 fs-3 text uppercase" style={{textAlign: 'right', fontSize: '10px', marginLeft:'300px'}}>Italian,American,Japanese,Indian</h5>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
    export default Slider