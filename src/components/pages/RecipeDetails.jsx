import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'


function RecipeDetails() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab,setActiveTab] = useState('instructions');
  const fetchDetails = async(name) =>{
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const detailData = await data.json();
    
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() =>{
    fetchDetails();
  },[params.name])
  return (
    <DetailWrapper>
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt=""  style={{ border: '1px solid black', maxWidth: '400px' }}  />
    </div>
    <Info>
      <Button className={activeTab === 'instructions' ? 'active' : ''}onClick ={() => setActiveTab("instructions")}>Instructions</Button>
      <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick ={() => setActiveTab("ingredients")}>Ingredients</Button>
      {activeTab === "instructions" && (
       <div>
       <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
       <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
       </div>
      )}
    {activeTab === "ingredients" && (
 <ul>
 {details.extendedIngredients.map((ingredient) =>(
   <li key={ingredient.id}>{ingredient.original}</li>
 ))}
</ul>
    ) }
     
    </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
margin-left: 1rem;
margin-right: 2rem;
display: flex;
.active{
  background: linear-gradient(35deg, #494949 , #313131);
  color: white;
}
h2{
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
}
li{
  line-height: 2.5rem;
  font-size: 0.9rem;
}
ul{
margin-top: 2rem;
 padding: 2rem;
 
}`;

const Button = styled.button `
color: black;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;`

const Info = styled.div `
font-color: blue;
margin-left:4rem;
h3 {
  font-size: 1.2rem; 
}
`

export default RecipeDetails
