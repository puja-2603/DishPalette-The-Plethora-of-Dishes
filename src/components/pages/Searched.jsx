import styled from "styled-components";
import React,{useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom';

function Searched() {
  const [SearchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async(name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${process.env.REACT_APP_API_KEY}&number=2`);
    const recipes = await data.json();
     localStorage.setItem("SearchedRecipes",JSON.stringify(recipes.hits));
    // setSearchedRecipes(recipes.hits);
    setSearchedRecipes(recipes.results);
  };

  useEffect(() =>{
    getSearched(params.search);
  },[params.search])
  return (
    <Grid>
      {SearchedRecipes.map((item) =>{
        return(
          <Card key = {item.id}>
             <Link to = {"/recipe/" + item.id}>
            <img src={item.image} alt=""/>
            <h4>{item.title}</h4>
            </Link>
          </Card>

        )
      }) }
    </Grid>
  );
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

export default Searched;




