import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {BrowserRouter, Link} from 'react-router-dom'
import '@splidejs/react-splide/css';

function Veg() {
   
    const[Veggie, setVeggies] = useState([]);

    useEffect(()=>{
     getVeggies();
    }, [])
    const getVeggies = async() =>{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
    
    const data = await api.json();
     localStorage.setItem("Veggie",JSON.stringify(data.recipes));
    
    setVeggies(data.recipes)
    console.log(data.recipes)
    }
  return (
    <BrowserRouter>
  <Wrapper>
       <h3>Veg Picks</h3>
       
       <Splide
       options={{
        perPage:5,
        drag: "free",
        gap: "5rem",
       }}
       >
        {Veggie.map((veggies)=>{
          return(
          <SplideSlide key={veggies.id} >
          <Card>
          <Link to = {"/recipe/" + veggies.id}>
<p>{veggies.title}</p>
<img src={veggies.image} alt={veggies.title} />
<Gradient/>
</Link>
   </Card>
   </SplideSlide>
          );
      })}
  </Splide>
  </Wrapper>
  </BrowserRouter>
  );
}

const Click = styled.div`
cursor: pointer;
`

const Gradient = styled.div`
// z-index:3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0,5));
`;
const Wrapper = styled.div`
 margin: 2rem 0rem;
 //display: flex;
 padding: 20px;
justify-content: space-evenly;
margin: 3rem 0rem;
`;
const Card = styled.div`
  width: 250px;
  min-height: 5rem;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
    font-weight: bold;
    text-align: center;
  }
// `;



export default Veg
