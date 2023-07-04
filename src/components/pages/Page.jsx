import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {BrowserRouter, Link} from 'react-router-dom'
import '@splidejs/react-splide/css';

function Page() {
    const[popular, setPopular] = useState([]);

    useEffect(()=>{
     getPopular();
    }, []);

    const getPopular = async() =>{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json();
    console.log(data);
    localStorage.setItem("popular", JSON.stringify(data.hits));
 
     setPopular(data.recipes)
     console.log(data.recipes)

    }
  return (
    <BrowserRouter>
  <Wrapper>
       <h3>Popular Picks</h3>
       
       <Splide
       options={{
        perPage:5,
        drag: "free",
        gap: "5rem",
       }}
       >
        {popular.map((recipe)=>{
          return(
          <SplideSlide key={recipe.id} >
          <Card>
            <Link to = {"/recipe/" + recipe.id}>
           <p>{recipe.title}</p>
           <img onClick={Click}  src={recipe.image} alt={recipe.title}  />
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
    
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
    font-weight: bold;
    text-align: center;
  }
`;

export default Page
