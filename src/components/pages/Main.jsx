import React from 'react'
import {BrowserRouter,Router,Routes ,Route} from "react-router-dom";
import Navbar from '../navbar'
import SearchBar from "./SearchBar";
import Searched from './Searched'
import Cusine from './Cusine'
import Category from './Category'
import RecipeDetails from './RecipeDetails'

function Main() {
  return (
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path = "/" element ={<Navbar/>}/>
       <Route path ="/cuisine/:type" element ={<Cusine/>}/>
       <Route path ="/Searched/:search" element ={<Searched/>}/>
       <Route path='/recipe/:name' element ={<RecipeDetails/>}/>
     </Routes>
     </BrowserRouter>
  
  );
}

export default Main
