import React,{ useState }  from 'react'
import styled from 'styled-components'
import {Link, useParams} from 'react-router-dom'
import { useEffect } from 'react';


function Cusine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async(name) =>{
   const data= await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
    const recipes = await data.json();
    //  localStorage.setItem('cuisine',JSON.stringify(recipes.hits));
    setCuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  },[params.type]);

  return (
    <Grid>
     {
     cuisine.map((item) =>{
      return (
        <Card key ={item.id}>
          <Link to = {"/recipe/" + item.id}>
           <img src = {item.image} alt ="" />
           <h4>{item.title}</h4>
           </Link>
           </Card>

      )
     }
     )
     } 
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
grid-gap: 3rem;
`;

const Card = styled.div`
  width: 250px;
  min-height: 5rem;
  padding: 20px;
  border-radius: 1.5px;
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    border-radius: 2rem;
    object-fit: cover;
  }

  h4{
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
    font-weight: bold;
    text-align: center;
  }`

export default Cusine
